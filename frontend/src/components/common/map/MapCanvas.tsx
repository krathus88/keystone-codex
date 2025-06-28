import { Box } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { Circle, Image as KonvaImage, Layer, Stage } from "react-konva"
import useImage from "use-image"

type Note = {
    id: string
    x: number
    y: number
}

const MIN_SCALE = 0.85
const MAX_SCALE = 4

type MapCanvasProps = {
    mapUrl: string
}

export const MapCanvas = ({ mapUrl }: MapCanvasProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const stageRef = useRef<any>(null)
    const animationRef = useRef<number | null>(null)

    const [mapImage] = useImage(mapUrl)
    const [containerSize, setContainerSize] = useState({
        width: 800,
        height: 600,
    })
    const [imageSize, setImageSize] = useState({ width: 1920, height: 1080 })

    const [scale, setScale] = useState(1)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [notes, setNotes] = useState<Note[]>([])

    // For velocity tracking
    const velocity = useRef({ x: 0, y: 0 })
    const lastDragPos = useRef({ x: 0, y: 0 })
    const lastDragTime = useRef<number>(0)

    useEffect(() => {
        const updateSize = () => {
            if (containerRef.current) {
                setContainerSize({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight,
                })
            }
        }
        updateSize()
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)
    }, [])

    useEffect(() => {
        if (mapImage) {
            setImageSize({
                width: mapImage.width,
                height: mapImage.height,
            })
        }
    }, [mapImage])

    useEffect(() => {
        const scaleX = containerSize.width / imageSize.width
        const scaleY = containerSize.height / imageSize.height
        const fitScale = Math.min(scaleX, scaleY)

        setScale(fitScale)
        setPosition({
            x: (containerSize.width - imageSize.width * fitScale) / 2,
            y: (containerSize.height - imageSize.height * fitScale) / 2,
        })
    }, [containerSize, imageSize])

    const handleWheel = (e: any) => {
        e.evt.preventDefault()
        const scaleBy = 1.05
        const oldScale = scale
        const pointer = stageRef.current.getPointerPosition()

        const mousePointTo = {
            x: (pointer.x - position.x) / oldScale,
            y: (pointer.y - position.y) / oldScale,
        }

        let newScale =
            e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy
        newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newScale))

        const newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        }

        setScale(newScale)
        setPosition(newPos)
    }

    const animateMomentum = () => {
        const friction = 0.94 // friction coefficient - lower means faster slowdown
        velocity.current.x *= friction
        velocity.current.y *= friction

        // Stop if velocity is very low
        if (
            Math.abs(velocity.current.x) < 0.1 &&
            Math.abs(velocity.current.y) < 0.1
        ) {
            velocity.current = { x: 0, y: 0 }
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            animationRef.current = null
            return
        }

        setPosition((pos) => ({
            x: pos.x + velocity.current.x,
            y: pos.y + velocity.current.y,
        }))

        animationRef.current = requestAnimationFrame(animateMomentum)
    }

    const handleDragStart = (e: any) => {
        // Stop any momentum animation if user starts dragging again
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
            animationRef.current = null
            velocity.current = { x: 0, y: 0 }
        }
        const pos = e.target.position()
        lastDragPos.current = { x: pos.x, y: pos.y }
        lastDragTime.current = performance.now()
    }

    const handleDragMove = (e: any) => {
        const pos = e.target.position()
        const now = performance.now()
        const dt = now - lastDragTime.current || 16 // fallback to 16ms (60fps)

        // Calculate velocity
        velocity.current = {
            x: (pos.x - lastDragPos.current.x) / dt,
            y: (pos.y - lastDragPos.current.y) / dt,
        }

        setPosition({ x: pos.x, y: pos.y })

        lastDragPos.current = { x: pos.x, y: pos.y }
        lastDragTime.current = now
    }

    const handleDragEnd = () => {
        // Start momentum animation on drag end
        if (animationRef.current) cancelAnimationFrame(animationRef.current)
        animationRef.current = requestAnimationFrame(animateMomentum)
    }

    const handleDblClick = () => {
        const stage = stageRef.current
        const pointer = stage.getPointerPosition()
        const clickedX = (pointer.x - position.x) / scale
        const clickedY = (pointer.y - position.y) / scale

        setNotes((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                x: clickedX,
                y: clickedY,
            },
        ])
    }

    return (
        <Box
            ref={containerRef}
            style={{ width: "100%", height: "100%", overflow: "hidden" }}
        >
            <Stage
                width={containerSize.width}
                height={containerSize.height}
                scaleX={scale}
                scaleY={scale}
                x={position.x}
                y={position.y}
                draggable
                onDragStart={handleDragStart}
                onDragMove={handleDragMove}
                onDragEnd={handleDragEnd}
                onWheel={handleWheel}
                onDblClick={handleDblClick}
                ref={stageRef}
                style={{ background: "#000" }}
            >
                <Layer>
                    {mapImage && (
                        <KonvaImage
                            image={mapImage}
                            x={0}
                            y={0}
                            width={imageSize.width}
                            height={imageSize.height}
                        />
                    )}
                </Layer>
                <Layer>
                    {notes.map((note) => (
                        <Circle key={note.id} x={note.x} y={note.y} />
                    ))}
                </Layer>
            </Stage>
        </Box>
    )
}

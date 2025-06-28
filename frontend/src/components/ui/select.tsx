"use client"
import type { CollectionItem } from "@chakra-ui/react"
import {
    Select as ChakraSelect,
    createListCollection,
    Portal,
} from "@chakra-ui/react"
import * as React from "react"
import { CloseButton } from "./close-button"
import type { SelectType } from "../../models/General"

interface SelectTriggerProps extends ChakraSelect.ControlProps {
    clearable?: boolean
}
export const SelectTrigger = React.forwardRef<
    HTMLButtonElement,
    SelectTriggerProps
>(function SelectTrigger(props, ref) {
    const { children, clearable, ...rest } = props
    return (
        <ChakraSelect.Control {...rest}>
            <ChakraSelect.Trigger ref={ref}>{children}</ChakraSelect.Trigger>
            <ChakraSelect.IndicatorGroup>
                {clearable && <SelectClearTrigger />}
                <ChakraSelect.Indicator />
            </ChakraSelect.IndicatorGroup>
        </ChakraSelect.Control>
    )
})
const SelectClearTrigger = React.forwardRef<
    HTMLButtonElement,
    ChakraSelect.ClearTriggerProps
>(function SelectClearTrigger(props, ref) {
    return (
        <ChakraSelect.ClearTrigger asChild {...props} ref={ref}>
            <CloseButton
                size="xs"
                variant="plain"
                focusVisibleRing="inside"
                focusRingWidth="2px"
                pointerEvents="auto"
            />
        </ChakraSelect.ClearTrigger>
    )
})
interface SelectContentProps extends ChakraSelect.ContentProps {
    portalled?: boolean
    portalRef?: React.RefObject<HTMLElement>
}
export const SelectContent = React.forwardRef<
    HTMLDivElement,
    SelectContentProps
>(function SelectContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props
    return (
        <Portal disabled={!portalled} container={portalRef}>
            <ChakraSelect.Positioner>
                <ChakraSelect.Content {...rest} ref={ref} />
            </ChakraSelect.Positioner>
        </Portal>
    )
})
interface SelectItemProps extends ChakraSelect.ItemProps {
    itemIndicator?: boolean
}
export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    function SelectItem(props, ref) {
        const { itemIndicator, item, children, ...rest } = props
        return (
            <ChakraSelect.Item
                key={item.value}
                item={item}
                css={{ minH: "24px" }}
                {...rest}
                ref={ref}
            >
                {children}
                {itemIndicator && <ChakraSelect.ItemIndicator />}
            </ChakraSelect.Item>
        )
    },
)
interface SelectValueTextProps
    extends Omit<ChakraSelect.ValueTextProps, "children"> {
    children?(items: CollectionItem[]): React.ReactNode
}
export const SelectValueText = React.forwardRef<
    HTMLSpanElement,
    SelectValueTextProps
>(function SelectValueText(props, ref) {
    const { children, ...rest } = props
    return (
        <ChakraSelect.ValueText {...rest} ref={ref}>
            <ChakraSelect.Context>
                {(select) => {
                    const items = select.selectedItems
                    if (items.length === 0) return props.placeholder
                    if (children) return children(items)
                    if (items.length === 1)
                        return select.collection.stringifyItem(items[0])
                    return `${items.length} selected`
                }}
            </ChakraSelect.Context>
        </ChakraSelect.ValueText>
    )
})
export const SelectRoot = React.forwardRef<
    HTMLDivElement,
    ChakraSelect.RootProps
>(function SelectRoot(props, ref) {
    return (
        <ChakraSelect.Root
            {...props}
            ref={ref}
            positioning={{ sameWidth: true, ...props.positioning }}
        >
            {props.asChild ? (
                props.children
            ) : (
                <>
                    <ChakraSelect.HiddenSelect />
                    {props.children}
                </>
            )}
        </ChakraSelect.Root>
    )
}) as ChakraSelect.RootComponent
interface SelectItemGroupProps extends ChakraSelect.ItemGroupProps {
    label: React.ReactNode
}
export const SelectItemGroup = React.forwardRef<
    HTMLDivElement,
    SelectItemGroupProps
>(function SelectItemGroup(props, ref) {
    const { children, label, ...rest } = props
    return (
        <ChakraSelect.ItemGroup {...rest} ref={ref}>
            <ChakraSelect.ItemGroupLabel>{label}</ChakraSelect.ItemGroupLabel>
            {children}
        </ChakraSelect.ItemGroup>
    )
})
export const SelectLabel = ChakraSelect.Label
export const SelectItemText = ChakraSelect.ItemText
export interface SelectProps
    extends Omit<
        ChakraSelect.RootProps,
        "value" | "onValueChange" | "collection" | "children"
    > {
    collection: SelectType[]
    value: string
    placeholder?: string
    isPlaceholderSelectable?: boolean
    clearable?: boolean
    portalled?: boolean
    portalRef?: React.RefObject<HTMLElement>
    onValueChange: (value: string) => void
}
export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
    function Select(
        {
            collection,
            value,
            placeholder = "",
            isPlaceholderSelectable,
            clearable,
            portalled,
            portalRef,
            onValueChange,
            ...rest
        },
        ref,
    ) {
        const handleChange = (details: { value: string[] }) => {
            const val = details.value[0] ?? ""
            onValueChange(val)
        }
        const fullCollection = isPlaceholderSelectable
            ? [{ value: "", label: placeholder }, ...collection]
            : collection
        return (
            <SelectRoot
                collection={createListCollection({ items: fullCollection })}
                ref={ref}
                value={[value]}
                onValueChange={handleChange}
                {...rest}
            >
                <SelectTrigger clearable={clearable}>
                    <SelectValueText placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent portalled={portalled} portalRef={portalRef}>
                    {fullCollection.map((item) => (
                        <SelectItem key={item.value} item={item}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
        )
    },
)

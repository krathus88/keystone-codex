#!/bin/bash
set -ex

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL..."
./wait-for-db.sh

echo "Applying database migrations..."
python manage.py migrate --noinput

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Starting server..."
if [ "$MODE" != "development" ]; then
    # Production or any non-dev mode: run Gunicorn
    exec gunicorn keystone_codex.asgi:application \
        -k uvicorn.workers.UvicornWorker \
        --bind 0.0.0.0:8000 \
        --workers 4 \
        --threads 2
else
    # Dev mode: use Uvicorn with reload for live reloading
    exec uvicorn keystone_codex.asgi:application \
        --host 0.0.0.0 \
        --port 8000 \
        --lifespan off \
        --reload
fi
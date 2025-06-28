FROM python:3.13.5-slim

# Set working directory
WORKDIR /app

# Install system dependencies needed for psycopg2 and pg_isready
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    python3-dev \
    postgresql-client \
 && rm -rf /var/lib/apt/lists/*

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Copy the entrypoint script
COPY entrypoint.sh /app/entrypoint.sh

# Make the entrypoint script executable
RUN chmod +x /app/entrypoint.sh

# Expose the development server port
EXPOSE 8000

# Use entrypoint.sh as the container command
CMD ["/app/entrypoint.sh"]
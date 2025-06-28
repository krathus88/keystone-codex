echo "Waiting for Postgres..."

until pg_isready -h db -p 5432 -U $POSTGRES_USER; do
  sleep 1
done

echo "Postgres is up - starting app"
exec "$@"

#!/usr/bin/env bash
until pg_isready -h "postgres" -p "5432"; do
    echo "Waiting for PostgreSQL..."
    sleep 2
done

echo "PostgreSQL is ready"

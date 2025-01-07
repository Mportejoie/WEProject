#!/usr/bin/env bash

HOST="$1"
PORT="$2"
shift 2
CMD="$@"

  echo "Waiting for $HOST:$PORT..."

while ! pg_isready -h $HOST -p $PORT -q; do
  echo "Trying to connect to $HOST on port $PORT..."
  sleep 2
done

echo "Connection to $HOST on port $PORT succeeded!"
exec $CMD

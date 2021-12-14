#!/bin/bash

root() {
	curl --request GET http://localhost:8000/
}

health() {
	curl --request GET http://localhost:8000/health
}

# root
health


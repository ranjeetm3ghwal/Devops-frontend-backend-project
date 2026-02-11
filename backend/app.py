from flask import Flask, jsonify
import os

app = Flask(__name__)

ENVIRONMENT = os.getenv("ENVIRONMENT")
APP_VERSION = os.getenv("APP_VERSION")

@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({
        "status": "success",
        "message": "Backend is running 🚀",
        "environment": ENVIRONMENT
    })

@app.route("/api/info", methods=["GET"])
def info():
    return jsonify({
        "application": "DevOps Demo App",
        "version": APP_VERSION,
        "author": "Developer Team"
    })

@app.route("/api/data", methods=["GET"])
def data():
    return jsonify({
        "data": "Hello from Flask Backend!",
        "status": "OK"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
from io import BytesIO
import os

app = Flask(__name__)
CORS(app)

# Load model
MODEL_PATH = os.path.join("models", "document_forgery.h5")
model = load_model(MODEL_PATH)

IMG_SIZE = (224, 224)  # Target size for model

@app.route("/")
def home():
    return jsonify({"status": "running", "message": "Document Forgery API"})

@app.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]

    try:
        # Read uploaded file bytes and convert to BytesIO
        file_bytes = BytesIO(file.read())

        # Load image
        img = load_img(file_bytes, target_size=IMG_SIZE)
        arr = img_to_array(img) / 255.0
        arr = np.expand_dims(arr, 0)

        # Predict
        prob = float(model.predict(arr)[0][0])
        label = "forged" if prob > 0.5 else "genuine"
        confidence = prob if prob > 0.5 else 1 - prob

        return jsonify({
            "label": label,
            "confidence": round(confidence, 4)
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)

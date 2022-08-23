from flask import Flask, request, jsonify, flash, redirect, url_for
import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.preprocessing import image
import io
from PIL import Image
import base64
from tensorflow.keras.preprocessing.image import ImageDataGenerator, img_to_array,load_img

from tensorflow import keras 


from keras.models import load_model


from glob import glob

from werkzeug.utils import secure_filename



classes = ["AdenocarcinomaChest Lung Cancer ","Large cell carcinoma Lung Cancer" , "NO Lung Cancer/ NORMAL" , "Squamous cell carcinoma Lung Cancer"]

def get_model():
    global model
    model = load_model('modelcancerlung.h5')
    print(" * Model loaded!")

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


def preprocess_image(img):
    x=image.img_to_array(img)
    x=x/255
    x=np.expand_dims(x,axis=0)
    return x


get_model()

@app.route("/", methods=["GET","POST"])
def predict():
    data = request.get_json()
    return "Hello World From Reserve Officers College!!"  


@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)

        if (file.filename):


            file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))

            img = image.load_img('./uploads/'+file.filename,target_size=(224,224))
            processed_image = preprocess_image(img)
            result = classes[np.argmax(model.predict(processed_image))]
            return  jsonify({"result":result})

    return "Success"


    
if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5000)
    


    

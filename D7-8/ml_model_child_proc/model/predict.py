#Dependencies: tensorflow-cpu/gpu, numpy, pillow
import tensorflow as tf
from tensorflow.keras.preprocessing.image import load_img, img_to_array
import numpy as np
import getopt
import sys


def predict(path):
    model = tf.keras.models.load_model(sys.path[0]+'/model_98.h5')
    img = load_img(path, target_size = (28,28), color_mode="grayscale")
    img = np.reshape(img_to_array(img)/255.0,(28,28))
    img = 1-img
    pred = np.argmax(model.predict(np.array([img])))
    return pred

def main(argv):
    path = ''
    try:
        opts,args=getopt.getopt(argv,"hp:")
    except getopt.GetoptError:
        print('predict.py -p <image_path>')
        sys.exit(2)
    for (opt,arg) in opts:
        if opt == '-h':
            print('predict.py -p <image_path>')
            print('please use input an image of a number with white background')
            sys.exit()
        elif opt == '-p':
            path = arg
            if path != '':
                print(predict(path))
        else:
            print('Error: missing argument or wrong argument')
            sys.exit(2)

if __name__=="__main__":
    main(sys.argv[1:])
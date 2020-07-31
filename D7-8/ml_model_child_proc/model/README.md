# The digit recognition model

## Some information
Based on the "helloworld" of deep learning: the MNIST dataset.
<br/>
ATTENTION: please input pictures with a WHITE BACKGROUND

## Installing dependencies

Depending on the tensorflow you want to install (CPU or GPU version) <br/>
    `pip install -r ./model/dependencies-cpu.txt`<br/> 
    OR <br/> `pip install -r ./model/dependencies-gpu.txt`

## Using the model
In your command line:<br/>
`python predict.py -p <image_path>`

## ON UBUNTU
PLEASE CHANGE "python" to "python3" in all the commands.
This means running the model with : 
`python3 predict.py -p <image_path>`
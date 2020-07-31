# RESTFUL API to recognize white background handwritten digits based on MNIST

Based on the MNIST dataset and tensorflow 2

*这里就给他们model文件夹里的东西，让他们用nodejs+express写一个简单的API，用child_process调用predict.py。*

# How to use

## API: 
- ### GET / 
Get information
- ### POST /
Body form-data: 
file : \<the image>


## How to run

- ### Install dependencies
    For node.js <br/>
    `yarn install`<br/>
    AND for python (install python first and then): depending on the tensorflow you want to install (CPU or GPU version) <br/>
    `pip install -r ./model/dependencies-cpu.txt`<br/> 
    OR <br/> `pip install -r ./model/dependencies-gpu.txt`
- ### Start server locally at localhost:3000
    `yarn start`
    <br/>
    Or
    <br/>
    `node server.js`



import os,pprint
import json


def makeObj(folderPath,obj={}):
    for file in os.listdir(folderPath):
        filePath = folderPath+file
        if os.path.isdir(filePath):
            obj[file]={}
            makeObj(filePath,obj[file])
        else:
            obj[file]={
               'checked': False,
               'currentAng': 1,
               'uri': 'http://45.41.235.161/~daasstor/SanthiyaPothi/VaaraTeVadeek/VaaraTeVadeekMahalla1.pdf',
            }
    return obj


absPath="/mnt/c/Users/gians/Desktop/CS/WebDev/sikhStuff/santhiya-pothi-web/public/pdfs/"
obj=makeObj(absPath)
# pprint.pprint(obj)
# print(obj)
print(json.dumps(obj, indent=4))

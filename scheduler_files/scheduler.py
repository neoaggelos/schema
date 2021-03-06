#!/usr/bin/python
import classifier as cf
import configFileCreator as cfile
import sys
import subprocess
import os

name=sys.argv[1]
version=sys.argv[2]
image=sys.argv[3]
jobid=sys.argv[4]
tmpFolder=sys.argv[5]
workingDir=sys.argv[6]
imountPoint=sys.argv[7]
isystemMount=sys.argv[8]
omountPoint=sys.argv[9]
osystemMount=sys.argv[10]
iomountPoint=sys.argv[11]
iosystemMount=sys.argv[12]
maxMem=sys.argv[13]
maxCores=sys.argv[14]
nfsIp=sys.argv[15]
# secJobid=sys.argv[10]


####DONE get tagList from ontology
# tagList=cf.classify(name, version)

####DONE decide machine type based on the taglist
# machineType=cf.decideServerPool(tagList)
machineType='converged-node'

###DONE create yaml file
yamlFile=cfile.createFile(name,machineType,image,
						jobid,tmpFolder,workingDir,
						imountPoint,isystemMount,
						omountPoint,osystemMount,
						iomountPoint,iosystemMount,
						maxMem,maxCores,nfsIp)
# exit(0)
####DOING deploy
subprocess.call(['kubectl','create','-f',yamlFile])
print(machineType)


# ####todo collect stats
# command=[os.path.dirname(os.path.realpath(__file__)) + '/probe_stats.py', name,jobid]
# # print command
# subprocess.Popen(command)



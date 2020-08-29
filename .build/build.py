#!/usr/bin/env python

from zipfile import ZipFile
import os

def zipdir(path, ziph, folderName):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file), folderName+"\\"+file)

def main():
    # move to SEMI parent directory
    os.chdir(os.pardir)
    
    # define the three directories we need to add to archive
    rootDir = os.getcwd()
    folder1 = "\\icons"
    folder2 = "\\scripts"
    folder3 = "\\styles"
    dir1 = rootDir+folder1
    dir2 = rootDir+folder2
    dir3 = rootDir+folder3

    # Create firefox output zip
    print('Building SEMI-Firefox.zip...')
    with ZipFile('SEMI-Firefox.zip', 'w') as fBuild:
        fBuild.write('manifest.json')
        # add the 3 SEMI subdirectories: icons, scripts, and styles
        zipdir(dir1, fBuild, folder1)
        zipdir(dir2, fBuild, folder2)
        zipdir(dir3, fBuild, folder3)

    # Create chrome output zip
    print('Building SEMI-Chrome.zip...')
    with ZipFile('SEMI-Chrome.zip', 'w') as cBuild:
        cBuild.write('chrome.manifest.json', 'manifest.json')
        # add the 3 SEMI subdirectories: icons, scripts, and styles
        zipdir(dir1, cBuild, folder1)
        zipdir(dir2, cBuild, folder2)
        zipdir(dir3, cBuild, folder3)

    # Move the two files to ./.build/output/
    print("Moving SEMI-Firefox.zip and SEMI-Chrome.zip to ./build/outputs/...")
    os.rename(rootDir+"\\SEMI-Firefox.zip", rootDir+"\\.build\\outputs\\SEMI-Firefox.zip")
    os.rename(rootDir+"\\SEMI-Chrome.zip", rootDir+"\\.build\\outputs\\SEMI-Chrome.zip")

if __name__ == '__main__':
   main()
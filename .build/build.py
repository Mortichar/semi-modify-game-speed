#!/usr/bin/env python

from zipfile import ZipFile
import os

def zipdir(path, ziph, folderName):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file), folderName+"/"+file)

def main():
    # move to SEMI parent directory
    os.chdir(os.pardir)

    # define the three directories we need to add to archive
    rootDir = os.getcwd()
    folder1 = "/icons"
    folder2 = "/scripts/plugins"
    folder3 = "/styles"
    dir1 = rootDir+folder1
    dir2 = rootDir+folder2
    dir3 = rootDir+folder3

    # Create output zip
    print('Building SEMI.zip...')
    with ZipFile('SEMI.zip', 'w') as fBuild:
        fBuild.write('manifest.json')
        os.chdir('scripts')
        fBuild.write('SEMI.js', '/scripts/SEMI.js')
        fBuild.write('core.js', '/scripts/core.js')
        fBuild.write('utils.js', '/scripts/utils.js')
        # add the 3 SEMI subdirectories: icons, scripts, and styles
        zipdir(dir1, fBuild, folder1)
        zipdir(dir2, fBuild, folder2)
        zipdir(dir3, fBuild, folder3)

    # Check for outputs directory, make it if doesn't exist
    print("Checking for ./.build/outputs directory and creating if it doesn't exist...")
    if not os.path.exists(rootDir+"/.build/outputs"):
        os.makedirs(rootDir+"/.build/outputs")

    # Remove previous outputs
    if os.path.exists(rootDir+"/.build/outputs/SEMI-Master-Build.zip"):
        print("Removing previous SEMI-Master-Build.zip...")
        os.remove(rootDir+"/.build/outputs/SEMI-Master-Build.zip")

    # Move the master build to ./.build/outputs/
    print("Moving SEMI.zip to ./.build/outputs/SEMI-Master-Build.zip")
    os.rename(rootDir+"/SEMI.zip", rootDir+"/.build/outputs/SEMI-Master-Build.zip")

    print("SEMI build script completed!")

if __name__ == '__main__':
    main()
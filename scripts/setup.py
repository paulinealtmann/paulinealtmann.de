#!/usr/bin/python
import git
import os
import sys

def update(projectPath, commit): 
	print ( "Update Project" )
	print ( "ProjectPath: " + projectPath)
	print ( "Checkout Commit: " + commit)

	repo = git.Repo(projectPath)

	repo.git.fetch()
	print("Done fetch")
	repo.git.reset( '--hard')
	print("Done reset")
	repo.git.clean('-df')
	print ( "Done clone" ) 
	repo.git.reset( '--hard', commit)
	print ("Repo updated to " + commit)
	print ( "Udpate Buildscripts done")

if __name__ == '__main__':
	projectPath = sys.argv[1]
	commit = sys.argv[2]
	update(projectPath, commit)
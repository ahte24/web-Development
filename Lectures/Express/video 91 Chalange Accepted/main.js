const fs = require("fs");
const path = require("path");

const sourceDirectory = "K:\\web dev\\js"; // Replace with your source directory path

function organizeFiles() {
	// Read the contents of the source directory
	fs.readdir(sourceDirectory, (error, files) => {
		if (error) {
			console.log("Getting error finding the directory: ", error);
		}
		files.forEach((file) => {
			const sourceFilePath = path.join(sourceDirectory, file);
			fs.stat(sourceFilePath, (error, start) => {
				if (error) {
					console.log("Error getting the file start...");
				}
				if (start.isFile()) {
					const fileExtension = path.extname(file).toLowerCase();
					const destinationFolder = path.join(sourceDirectory, fileExtension);
					if (!fs.existsSync(destinationFolder)) {
						fs.mkdirSync(destinationFolder);
					}
					const destinationFilePath = path.join(destinationFolder, file);
					fs.rename(sourceFilePath, destinationFilePath, (error) => {
						if (error) {
							console.log(
								`Error moving file ${file} to ${destinationFilePath}`,
								error
							);
						} else {
							console.log(`Moved ${file} to ${destinationFilePath}...`);
						}
					});
				}
			});
		});
	});
}
// Call the function to organize files
organizeFiles();

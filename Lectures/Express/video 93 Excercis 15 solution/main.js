import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const sourcedirectory =
	"K:\\sigma web dev\\Lectures\\Express\\video 93 Excercis 15 solution\\files";

let files = await fs.readdir(sourcedirectory);
for (const file of files) {
	const extensionName = path.extname(file).toLowerCase();
	const destinationFolder = path.join(sourcedirectory, extensionName);
	if (!fsn.existsSync(destinationFolder)) {
		fsn.mkdir(destinationFolder);
	}
	const sourceFilePath = path.join(sourcedirectory, file);
	const destinationFilePath = path.join(destinationFolder, file);
	fs.rename(sourceFilePath, destinationFilePath);
}

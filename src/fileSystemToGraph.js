function fileSystemToGraph( fileSystem) {
  return fileSystem.reduce( (fileStructure, { node } ) => {
    const root = "engineer-diary"
    const [ _ignore, path ] = node.fileAbsolutePath.split(root)
    let filePath = path
      .split("/")
      .filter( a => a !== "" )
      .map(f => f.toLowerCase())
    
    filePath = [ root, ...filePath]
    
    if(!fileStructure.root) {
      fileStructure.root = filePath[0]
    }

    filePath.forEach( (path, index) => {
      const isFile = path.includes(".md")
      
      if(!fileStructure[path]){
        if(!isFile){
          fileStructure[path] = {
            isFile,
            folders:[],
            files: []
          }
        } else {
          node.isFile = true
          node.fileName = path.split(".md")[0]
          fileStructure[node.fileAbsolutePath] = node
        }
      }

      if(!isFile) {
        const next = filePath[index + 1]
        const nextIsFile = next.includes(".md")
        if( nextIsFile ) {
          fileStructure[path].files.push(node.fileAbsolutePath)
        } else {
          if(!fileStructure[path].folders.find(f => f === next )) {
            fileStructure[path].folders.push(next)
          }
        }  
      }
    } )
    return fileStructure
  }, {} )
}

module.exports = {
  fileSystemToGraph
}
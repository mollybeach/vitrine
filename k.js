function dfs(graph, root) {
    let visited = [];
    let stack = [root];
    let yPos;
    let xList = [];
    while(stack.length > 0){
       yPos = stack.pop();
       if(visited.indexOf(yPos)== -1){
         console.log(visited);
         visited.push(yPos);
         xList = graph[yPos];
         let i = -1;
         while ((i = xList.indexOf(1, i+1)) != -1){
            stack.push(i);
        }
       /* for (let i = 0; i < xList.length; i++) {
          if (xList[i] == 1) {
            stack.push(i);
          }
        }*/
      }
    }
    return visited;
  }
  
  var eyDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(dfs(eyDFSGraph, 3));

  function dfs(graph, root) {
    let visited = [];
    let stack = [root];
    let yPos;
    let xList = [];
    while(stack.length > 0){
       yPos = stack.pop();
       if(visited.indexOf(yPos)== -1){
         console.log(visited);
         visited.push(yPos);
         xList = graph[yPos];
       for (let i = 0; i < xList.length; i++) {
          if (xList[i] == 1) {
            stack.push(i);
          }
        }
      }
    }
    return visited;
  }
  
  var eyDFSGraph = [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0]
  ];
  console.log(dfs(eyDFSGraph, 3));
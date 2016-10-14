function printEle(arr,a,b){
	var i=a[0],j=a[1];
  for(;j<=b[0];j++){
  	console.log(arr[i][j]+"->");
  }
  j--;
  i++;
  for(;i<=b[1];i++){
  	console.log(arr[i][j]+"->");
  }
  i--;
  j--;
  for(;j>=a[1];j--){
  	console.log(arr[i][j]+"->");
  }
  j++;
  i--;
  for(;i>a[0];i--){
  	console.log(arr[i][j]+"->");
  }
  
}
function arrTest(arr){
	var a=[],b=[];
	a[0]=0;
	a[1]=0;
	b[0]=arr[0].length-1;
	b[1]=arr.length-1;
	
	while(a[0]<=b[0]){
		
		printEle(arr,a,b);
		a[0]++;
		a[1]++;
		b[0]--;
		b[1]--;
		
	}
}
var test1=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]];

arrTest(test1);
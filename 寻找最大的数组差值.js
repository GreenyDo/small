var findMax = function(arr){
   var min=arr[0];
   var max=0;
  for(var i=0;i<arr.length;i++){
  	 if((arr[i]-min)>max){
     	max=arr[i]-min;
     }
     if(arr[i]<min){
     	min=arr[i];
     }
    
  }
  return max;
}
var test1=[2,5,7,3,9,1];
var myMax=findMax(test1);
console.log(myMax);
// 有一个长为n的数组A，求满足0≤a≤b<n的A[b]-A[a]的最大值。
//给定数组A及它的大小n，请返回最大差值。
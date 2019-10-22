/* qr code generator
Created by : Yousuf S A
Date : 19th December 2018 */
function generateQr(){var a=$("#data").val(),e=$("#brand").val(),r=$("#size").val(),d=$("#color").val(),n=$("#brandSize").val();""!=a?(n>r/3&&(n=r/3),$("#qrcode").html(""),jQuery("#qrcode").qrcode({render:"canvas",text:a,width:r,height:r,background:"#ffffff",foreground:d,src:e,imgWidth:n,imgHeight:n})):alert("add enter data")}$(document).ready(function(){$("#size").change(function(){var a=$("#size").val();a&&$("#brandSize").val(a/4)})});
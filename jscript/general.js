/* qr code generator
Created by : Yousuf S A
Date : 19th December 2018 */
function generateQr(){var e=$("#data").val(),r=$("#brand").val(),a=$("#size").val(),d=$("#color").val(),t=a/4;""!=e?($("#qrcode").html(""),jQuery("#qrcode").qrcode({render:"canvas",text:e,width:a,height:a,background:"#ffffff",foreground:d,src:r,imgWidth:t,imgHeight:t})):alert("add enter data")}
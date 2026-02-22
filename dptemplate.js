var content = document.getElementById('content').innerHTML;
var template = ' \
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> \
<html> \
<head> \
<meta http-equiv="content-type" content="text/html" charset="utf-8"/> \
<meta charset="utf-8"> \
<title>Pear Inc. - Memoria 5D</title> \
</head> \
<body text="#000000" link="#007AFF" alink="#007AFF" vlink="#007AFF" style="background:none;"> \
 \
<div align="center" style="background-color:#F2F2F7; border-bottom: 1px solid #C7C7CC; padding: 20px;"> \
<h1 style="font-family: sans-serif; color: #1C1C1E;">Pear Inc. Repo</h1> \
<p style="color: #8E8E93;">Universal Intelligence & 5D Memory Project</p> \
</div> \
 \
<div align="center" style="background-color:#FFFFFF;"> \
<table> \
<tr style="width:100%"> \
<td> \
<div style="text-align: justify; font-size:110%; background-color:#FFFFFF; min-width: 300px; max-width: 700px; vertical-align: top;"><br> \
' + content + '\
</div> \
<hr> \
<h3 style="font-family: sans-serif;"> \
<a href="https://github.com/nicowtnow" target="_blank">View on GitHub</a><br> \
<a href="mailto:guzcaz060513@gmail.com">Contact Nico</a> \
</h3> \
</td> \
</tr> \
</table> \
</div> \
';
document.documentElement.innerHTML = template;

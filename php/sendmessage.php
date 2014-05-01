$sendto   = "services@izenda.com";
	$usermail = $_POST['email'];
	$content  = nl2br($_POST['msg']);

	$subject  = "New Feedback Message";
	$headers  = "From: " . strip_tags($usermail) . "\r\n";
	$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

	$msg  = "";
	$msg .= "<h2 style="font-weight: bold; border-bottom: 1px dotted #ccc;">New User Feedback</h2>\r\n";
	$msg .= "<strong>Sent by:</strong> ".$usermail."\r\n";
	$msg .= "<strong>Message:</strong> ".$content."\r\n";
	$msg .= "";

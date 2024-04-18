Important info based on the Kahoot:
SMTP - 25 (Simple Mail Transfer Protocol)
HTTP - 80 (Hypertext Transfer Protocol)
HTTPS - 442 (Hypertext Transfer Protocol Secure)
FTP - 20, 21 (File Transfer Protocol) 20(forwarding and transferring of data) 21(signaling for FTP)
TELNET - 23 (TCP Protocols)
IMAP - 143 (Internet Message Access Protocol)
RDP - 3389 (Remote Desktop Protocol)
SSH - 22 (Secure Shell)
DNS -53 (Domain Name System)
DHCP - 67, 68 (Dynamic Host Configuration Protocol)
POP3-110 (Post Office Protocol Version 3)

HTTP response status codes:
Information responses (100-199)
Successful responses (200-299)
Redirection messages (300-399)
Client error responses (400-499)
Server error responses(500-599)

100 Continue
101 Switching Protocols
102 Processing (WebDAV; RFC 2518)
103 Early Hints (RFC 8297)
200 OK
201 Created
202 Accepted
203 Non-Authoritative Information (since HTTP/1.1)
204 No Content
205 Reset Content
206 Partial Content
207 Multi-Status (WebDAV; RFC 4918)
208 Already Reported (WebDAV; RFC 5842)
226 IM Used (RFC 3229)
300 Multiple Choices
301 Moved Permanently
302 Found (Previously "Moved temporarily")
303 See Other (since HTTP/1.1)
304 Not Modified
305 Use Proxy (since HTTP/1.1)
306 Switch Proxy
307 Temporary Redirect (since HTTP/1.1)
308 Permanent Redirect

400 Bad Request
401 Unauthorized
402 Payment Required
403 Forbidden
404 Not Found
405 Method Not Allowed
406 Not Acceptable
407 Proxy Authentication Required
408 Request Timeout
409 Conflict
410 Gone
411 Length Required
412 Precondition Failed
413 Payload Too Large
414 URI Too Long
415 Unsupported Media Type
416 Range Not Satisfiable
417 Expectation Failed
418 I'm a teapot (RFC 2324, RFC 7168)
421 Misdirected Request
422 Unprocessable Content
423 Locked (WebDAV; RFC 4918)
424 Failed Dependency (WebDAV; RFC 4918)
425 Too Early (RFC 8470)
426 Upgrade Required
428 Precondition Required (RFC 6585)
429 Too Many Requests (RFC 6585)
431 Request Header Fields Too Large (RFC 6585)
451 Unavailable For Legal Reasons (RFC 7725)

500 Internal Server Error
501 Not Implemented
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
505 HTTP Version Not Supported
506 Variant Also Negotiates (RFC 2295)
507 Insufficient Storage (WebDAV; RFC 4918)
508 Loop Detected (WebDAV; RFC 5842)
510 Not Extended (RFC 2774)
511 Network Authentication Required (RFC 6585)
The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).[25]
Unofficial codes
The following codes are not specified by any standard.

218 This is fine (Apache HTTP Server)
419 Page Expired (Laravel Framework)
420 Method Failure (Spring Framework)
420 Enhance Your Calm (Twitter)
430 Request Header Fields Too Large (Shopify)
430 Shopify Security Rejection (Shopify)
450 Blocked by Windows Parental Controls (Microsoft)
498 Invalid Token (Esri)
499 Token Required (Esri)
509 Bandwidth Limit Exceeded (Apache Web Server/cPanel)
529 Site is overloaded
530 Site is frozen
530 Origin DNS Error (Shopify)
540 Temporarily Disabled (Shopify)
598 (Informal convention) Network read timeout error
599 Network Connect Timeout Error
783 Unexpected Token (Shopify)
Used by Shopify to indicate that the request includes a JSON syntax error.[36]
Internet Information Services
Microsoft's Internet Information Services (IIS) web server expands the 4xx error space to signal errors with the client's request.

440 Login Time-out
449 Retry With
451 Redirect
Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.[45] The client is expected to re-run the HTTP AutoDiscover operation to find a more appropriate server.[46]
IIS sometimes uses additional decimal sub-codes for more specific information,[47] however these sub-codes only appear in the response payload and in documentation, not in the place of an actual HTTP status code.

nginx
The nginx web server software expands the 4xx error space to signal issues with the client's request.[48][49]

444 No Response
494 Request header too large
495 SSL Certificate Error
496 SSL Certificate Required
An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.
497 HTTP Request Sent to HTTPS Port
An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.
499 Client Closed Request
Used when the client has closed the request before the server could send a response.
Cloudflare
Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.[51]

520 Web Server Returned an Unknown Error
521 Web Server Is Down
522 Connection Timed Out
523 Origin Is Unreachable
524 A Timeout Occurred
525 SSL Handshake Failed
526 Invalid SSL Certificate
527 Railgun Error (obsolete)
530
Error 530 is returned along with a 1xxx error.[54]
AWS Elastic Load Balancing
Amazon Web Services' Elastic Load Balancing adds a few custom return codes to signal issues either with the client request or with the origin server.[55]

000
Returned with an HTTP/2 GOAWAY frame if the compressed length of any of the headers exceeds 8K bytes or if more than 10K requests are served through one connection.[55]
460
Client closed the connection with the load balancer before the idle timeout period elapsed. Typically, when client timeout is sooner than the Elastic Load Balancer's timeout.[55]
463
The load balancer received an X-Forwarded-For request header with more than 30 IP addresses.[55]
464
Incompatible protocol versions between Client and Origin server.[55]
561 Unauthorized
110 Response is Stale
111 Revalidation Failed
112 Disconnected Operation
113 Heuristic Expiration
199 Miscellaneous Warning
214 Transformation Applied
299 Miscellaneous Persistent Warning

Standard request fields(http):
A-IM
Accept
Accept-Charset	
Accept-Datetime	
Accept-Encoding	
Accept-Language	
Access-Control-Request-Method,
Access-Control-Request-Headers
Authorization	
Cache-Control
Connection
Content-Encoding	
Content-Length	
Content-MD5	
Content-Type	
Cookie	
Date
Expect
Forwarded
From
Host
HTTP2-Settings	
If-Match	
If-Modified-Since	
If-None-Match	
If-Range	
If-Unmodified-Since	
Max-Forwards	
Origin
Pragma
Prefer
Proxy-Authorization	
Range
Referer
TE
Trailer
Transfer-Encoding	
User-Agent
Upgrade
Via
Warning


Http requests:
GET: Retrieves data from a server at the specified resource. GET requests should only retrieve data and should have no other effect on the data.
POST: Sends data to the server. Typically, POST is used to create a new resource at the specified URL, but it can also be used to submit data to be processed to a specified resource.
PUT: Replaces all current representations of the target resource with the uploaded content. PUT is primarily used for updating resources.
DELETE: Removes all current representations of the target resource given by a URL.

The purpose of req.params is to allow developers to easily access parts of the URL that are expected to vary between requests.

regex characters:
[xyz]
[a-c] Matches any one of the enclosed characters.
[^xyz]
[^a-c]matches anything that is not enclosed in the square brackets.
. Matches any single character except line terminators: \n
\d Matches any digit
\D Matches any character that is not a digit
\w Matches any alphanumeric character from the basic Latin alphabet, including the underscore.
\W Matches any character that is not a word character from the basic Latin alphabet. For example %.
\s Matches a single white space character, including space, tab, form feed, line feed, and other Unicode spaces.
\S Matches a single character other than white space. 
\t	Matches a horizontal tab.
\r	Matches a carriage return.
\n	Matches a linefeed.
\v	Matches a vertical tab.
\f	Matches a form-feed.
[\b]	Matches a backspace. If you're looking for the word-boundary character (\b)
\0	Matches a NUL character. Do not follow this with another digit.
\cX	Matches a control character using caret notation
\xhh	Matches the character with the code hh (two hexadecimal digits).
\uhhhh	Matches a UTF-16 code-unit with the value hhhh (four hexadecimal digits).
\u{hhhh} or \u{hhhhh}	(Only when the u flag is set.) Matches the character with the Unicode value U+hhhh or U+hhhhh (hexadecimal digits).
\	Indicates that the following character should be treated specially, or "escaped". It behaves one of two ways.
x|y	Disjunction: Matches either "x" or "y".

Mongodb query format:
{name: "title", job: 2}

jQuery Selectors:
*	$("*")	All elements
#id	$("#lastname")	The element with id="lastname"
.class	$(".intro")	All elements with class="intro"
.class,.class	$(".intro,.demo")	All elements with the class "intro" or "demo"
element	$("p")	All <p> elements
el1,el2,el3	$("h1,div,p")	All <h1>, <div> and <p> elements
 	 	 
:first	$("p:first")	The first <p> element
:last	$("p:last")	The last <p> element
:even	$("tr:even")	All even <tr> elements
:odd	$("tr:odd")	All odd <tr> elements
 	 	 
:first-child	$("p:first-child")	All <p> elements that are the first child of their parent
:first-of-type	$("p:first-of-type")	All <p> elements that are the first <p> element of their parent
:last-child	$("p:last-child")	All <p> elements that are the last child of their parent
:last-of-type	$("p:last-of-type")	All <p> elements that are the last <p> element of their parent
:nth-child(n)	$("p:nth-child(2)")	All <p> elements that are the 2nd child of their parent
:nth-last-child(n)	$("p:nth-last-child(2)")	All <p> elements that are the 2nd child of their parent, counting from the last child
:nth-of-type(n)	$("p:nth-of-type(2)")	All <p> elements that are the 2nd <p> element of their parent
:nth-last-of-type(n)	$("p:nth-last-of-type(2)")	All <p> elements that are the 2nd <p> element of their parent, counting from the last child
:only-child	$("p:only-child")	All <p> elements that are the only child of their parent
:only-of-type	$("p:only-of-type")	All <p> elements that are the only child, of its type, of their parent
 	 	 
parent > child	$("div > p")	All <p> elements that are a direct child of a <div> element
parent descendant	$("div p")	All <p> elements that are descendants of a <div> element
element + next	$("div + p")	The <p> element that are next to each <div> elements
element ~ siblings	$("div ~ p")	All <p> elements that appear after the <div> element
 	 	 
:eq(index)	$("ul li:eq(3)")	The fourth element in a list (index starts at 0)
:gt(no)	$("ul li:gt(3)")	List elements with an index greater than 3
:lt(no)	$("ul li:lt(3)")	List elements with an index less than 3
:not(selector)	$("input:not(:empty)")	All input elements that are not empty
 	 	 
:header	$(":header")	All header elements <h1>, <h2> ...
:animated	$(":animated")	All animated elements
:focus	$(":focus")	The element that currently has focus
:contains(text)	$(":contains('Hello')")	All elements which contains the text "Hello"
:has(selector)	$("div:has(p)")	All <div> elements that have a <p> element
:empty	$(":empty")	All elements that are empty
:parent	$(":parent")	All elements that are a parent of another element
:hidden	$("p:hidden")	All hidden <p> elements
:visible	$("table:visible")	All visible tables
:root	$(":root")	The document's root element
:lang(language)	$("p:lang(de)")	All <p> elements with a lang attribute value starting with "de"
 	 	 
[attribute]	$("[href]")	All elements with a href attribute
[attribute=value]	$("[href='default.htm']")	All elements with a href attribute value equal to "default.htm"
[attribute!=value]	$("[href!='default.htm']")	All elements with a href attribute value not equal to "default.htm"
[attribute$=value]	$("[href$='.jpg']")	All elements with a href attribute value ending with ".jpg"
[attribute|=value]	$("[title|='Tomorrow']")	All elements with a title attribute value equal to 'Tomorrow', or starting with 'Tomorrow' followed by a hyphen
[attribute^=value]	$("[title^='Tom']")	All elements with a title attribute value starting with "Tom"
[attribute~=value]	$("[title~='hello']")	All elements with a title attribute value containing the specific word "hello"
[attribute*=value]	$("[title*='hello']")	All elements with a title attribute value containing the word "hello"
 	 	 
:input	$(":input")	All input elements
:text	$(":text")	All input elements with type="text"
:password	$(":password")	All input elements with type="password"
:radio	$(":radio")	All input elements with type="radio"
:checkbox	$(":checkbox")	All input elements with type="checkbox"
:submit	$(":submit")	All input elements with type="submit"
:reset	$(":reset")	All input elements with type="reset"
:button	$(":button")	All input elements with type="button"
:image	$(":image")	All input elements with type="image"
:file	$(":file")	All input elements with type="file"
:enabled	$(":enabled")	All enabled input elements
:disabled	$(":disabled")	All disabled input elements
:selected	$(":selected")	All selected input elements
:checked	$(":checked")	All checked input elements


$or : or in mongodb
$in : samething as $or but better
$lt : less than
$regex: for regex

example code:

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
  });
});

wss.on('connection', (ws) => {...}): This listens for new WebSocket connections to the server. Each new connection triggers the callback function, passing in the WebSocket connection (ws) as an argument.
Inside the connection handler ws.on('message', (data) => {...}): For each connection (ws), it sets up another event listener that listens for messages sent by the client over this WebSocket connection. When a message is received, the callback function is executed with the message data (data). In this snippet, however, the callback does nothing with the received data (it's empty).

snippet 2:
socket.onmessage = (event) => {
  console.log(event.data);
};

socket.onmessage = (event) => {...}: This sets an event handler for the message event on a WebSocket object named socket. This is typically used in a browser or client-side environment.

console.log(event.data);: Whenever a message is received from the WebSocket server, the data of the message (event.data) is logged to the console. This would replace the incorrect ${event.data};, which seems to be an attempt to use template literals incorrectly or a placeholder.

React.useState(). useState hook can pass the initial state to this function and return an array with two elements.
1. current state value
2. A function that updates this state

useEffect hook to perform side effects. Takes 2 arguments.
1. Effect function
2. Dependencies array

Slide info:
https://byu.edu:443/api/city?q=pro#3
https://(Scheme)
byu.edu(domain)
:443(port)
/api/city(path)
?q=pro(parameters)
#3(anchor)

 Port
Protocol
20
File Transfer Protocol (FTP) for data transfer
22
Secure Shell (SSH) for connecting to remote devices
25
Simple Mail Transfer Protocol (SMTP) for sending email
53
Domain Name System (DNS) for looking up IP addresses
80
Hypertext Transfer Protocol (HTTP) for web requests
123
Network Time Protocol (NTP) for managing time
443
HTTP Secure (HTTPS) for secure web requests

methods
GET: Get an existing resource (no body)
POST: Create a new resource
POST: Create a new resource
DELETE: Delete a resource
OPTIONS: Get information about a resource

Status Codes
2xx: 200 Success, 204 No content
3xx: 301/302 redirect, 304 not modified
4xx: 400 bad request, 404 not found, 403 forbidden
         429 Too many requests
5xx: 500 server error, 503 not available

 Header
Example
Meaning
Authorization
bearer bGciOiJIU
A token that authorizes the user making the request.
Accept
image/*
What content format the client accepts.
Content-Type
text/html
The format of request/response content.
Cookie
SessionID=39sj34
Server info that is stored on the client.
Host
info.cern.ch
The domain name of the target server.
Origin
cs260.click
Identifies the origin that caused the request.
Access-Control-Allow-Origin
https://cs260.click
Server response of what origins can make a request.
Content-Length
368
The number of bytes contained in the response.
Cache-Control
max-age=604800
Tells the client how it can cache the response.
User-Agent
Mozilla/5.0
The client application making the request.

Content Types:

IANA MIME types
text/html
application/json
image/jpg
video/mp4

Request
accept
content-type

Response
content-type

Ryan Dahl:Creator of Node.js
“You can never understand everything. But, you should push yourself to understand the system”

NVM - Node version manager
Node - JavaScript runtime
NPM - Node package manager




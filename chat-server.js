var http    =   require('http');
var fs      =   require('fs');

// Création du serveur
var app = http.createServer(function (req, res) {
    // On lit notre fichier tchat.html
    fs.readFile('./chat.html', 'utf-8', function(error, content) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(content);
    });
});

//// SOCKET.IO ////

var io      =   require('socket.io');

// Socket.IO écoute maintenant notre application !
io = io.listen(app); 

io.of("/chatfun")//namespace /chatfun
.on('connection', function (socket) {    
    // Quand on reçoit un nouveau message
    socket.on('newMessage', function (mess) {        
        // On envoie à tout les clients connectés (sauf celui qui a appelé l'événement) le nouveau message
        socket.broadcast.emit('getNewMessage', mess);
    });
	
	socket.on('user_connexion', function(user){
		socket.broadcast.emit('user_connected', user);
	});
	
});

///////////////////

// Notre application écoute sur le port 8080
app.listen(8080);
console.log('Live Chat App running at http://localhost:8080/');
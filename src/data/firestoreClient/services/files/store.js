import firebase from  'firebase';
(function () {
    
    var messagesRef = firebase.database().ref('Checking');

    addEventListener("trix-attachment-add", function (event) {
        if (event.attachment.file) {
            uploadFileAttachment(event.attachment)
        }
    })

    function uploadFileAttachment(attachment) {
        uploadFile(attachment.file, setProgress, setAttributes)

        function setProgress(progress) {
            attachment.setUploadProgress(progress)
        }

        function setAttributes(attributes) {
            attachment.setAttributes(attributes)
        }
    }

    function uploadFile(file, progressCallback, successCallback) {

        var type = 'images/uploads';
        var storage = firebase.storage();
        var storageref = storage.ref();
        var thisref = storageref.child(type).child(file.name).put(file);
        thisref.on('state_changed',
            snap => {
                const percentUploaded = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
                progressCallback(percentUploaded)
            },
            
        function (error) {

        }, function () {
            thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                saveMessage(downloadURL);
                // alert('uploaded! ');
                console.log(downloadURL);
                var attributes = {
                    url: downloadURL ,
                    href: downloadURL + "?content-disposition=attachment"
                }
                successCallback(attributes)
            });
            });
        function saveMessage(url) {
            var newMessageRef = messagesRef.push();
            // successCallback(url);
            newMessageRef.set({
                imageurl: url +'?content-disposition=attachment',
            });
        }
        
    }   })();
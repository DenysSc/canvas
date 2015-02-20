    $( document ).ready(function() {
		$.getJSON("/php/json.php", function(data){
			
			var canvas =  new fabric.Canvas('logo');
		
			fabric.Image.fromURL( data.layers[0], function(img) {
			  var img1 = img.scale(0.7).set({ left: 10, top: 10 });

			  fabric.Image.fromURL( data.layers[1], function(img) {
				var img2 = img.scale(0.7).set({ left: 10, top: 10 });

				fabric.Image.fromURL( data.layers[2], function(img) {
				  var img3 = img.scale(0.7).set({ left: 10, top: 10 });
				  
				  var company = new fabric.Text(data.companyName, {
					  fontFamily: data.companyNameFont,
					  fontSize: 35,
					  left: 15,
					  top: 110
					});
				var slog = new fabric.Text(data.slogan, {
					  fontFamily: data.sloganFont,
					  fontSize: 15,
					  left: 20,
					  top: 157
					});

				  canvas.add(new fabric.Group([ img1, img2, img3,company,slog], { originX: 'center', originY: 'center' }))
				});
			  });
			});
			
			canvas.renderAll();
		});
	});
// Extends the $.attr() method to return a list of all attributes if one is not specified.

(function(old) {
  $.fn.attr = function() {
    if(arguments.length === 0) {
      if(this.length === 0) {
        return null;
      }

      var obj = {};
      $.each(this[0].attributes, function() {
        if(this.specified) {
          obj[this.name] = this.value;
        }
      });
      return obj;
    }

    return old.apply(this, arguments);
  };
})($.fn.attr);



// Provides a $.xmlDOM() method to convert a string to XML, with some error handling.

(function($) {
  // IE DOMParser wrapper
  if ( window['DOMParser'] == undefined && window.ActiveXObject ) {
    DOMParser = function() { };
    DOMParser.prototype.parseFromString = function( xmlString ) {
      var doc = new ActiveXObject('Microsoft.XMLDOM');
          doc.async = 'false';
          doc.loadXML( xmlString );
      return doc;
    };
  }
  
  $.xmlDOM = function(xml, onErrorFn) {
    try {
      var xmlDoc  = ( new DOMParser() ).parseFromString( xml, 'text/xml' );
      if ( $.isXMLDoc( xmlDoc ) ) {
        var err = $('parsererror', xmlDoc);
        if ( err.length == 1 ) {
          throw('Error: ' + $(xmlDoc).text() );
        }
      } else {
        throw('Unable to parse XML');
      }
    } catch( e ) {
      var msg = ( e.name == undefined ? e : e.name + ': ' + e.message );
      if ( $.isFunction( onErrorFn ) ) {
        onErrorFn( msg );
      } else {
        $(document).trigger('xmlParseError', [ msg ]);
      }
      return $([]);
    }
    return $( xmlDoc );
  };
})(jQuery);


$.validateSOAPStructure = function(xml) {
  if (typeof xml.firstChild === 'undefined') {
    console.warn('Object is not an XML document.');
    return false;
  } else {
    if (xml.firstChild.nodeName.toLowerCase() === 'soap:envelope' && xml.firstChild.firstChild.nodeName.toLowerCase() === 'soap:body') {
      console.log('Valid soap structure.');
      return true;
    } else {
      console.warn('XML document has invalid soap structure.');
      return false;
    }
  }
}


$.getWebServiceName = function(xml) {
  var serviceName = xml.firstChild.firstChild.firstChild.nodeName;
  console.log('service name determined to be '+serviceName);
  return serviceName;
}
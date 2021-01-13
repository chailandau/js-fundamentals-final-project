// wrap JS in IIFE
( function() 
{
  //////////////////////////////////////////////////
  // gif hover change
  //////////////////////////////////////////////////

  // define gif image 
  const gifImg = document.querySelector( ".gif > img" );

  let gifHoverChange = () => 
  {
    // change gif on hover
    gifImg.addEventListener( "mouseenter", ()=>
    {
      gifImg.src = "https://media1.tenor.com/images/e1f23dfb401e68caf9e0d81e469a2b46/tenor.gif";
      gifImg.alt = "nyan cat gif";
    } );
    // change gif back when hover is over
    gifImg.addEventListener( "mouseleave", ()=>
    {
      gifImg.src = "https://media1.tenor.com/images/24f2f57e56c092344cfa5ee23931e8b8/tenor.gif";
      gifImg.alt = "gif of a gif";
    } );
  };
  // run the gif hover change
  gifHoverChange();

  //////////////////////////////////////////////////
  // main functionality (search and find gifs)
  //////////////////////////////////////////////////
  
  // define search input
  const searchGifs = document.querySelector( "#search_gifs" );
  // define buttons
  const button1 = document.querySelector( "#button_1" );
  const button4 = document.querySelector( "#button_4" );
  const button10 = document.querySelector( "#button_10" );
  //define form
  const gifForm = document.querySelector( "#gif_form" );
  // define gif results
  const gifResults = document.querySelector( "#gif_results" );

  // listen to form submit, then get images and populate
  gifForm.addEventListener ( "submit", event=> 
  {
    event.preventDefault();
    // API call
    let apiCall = async() => 
    {
      let apiKey = "05BEAHZ43U53";
      try
      {
        let data = await axios(
          `https://api.tenor.com/v1/search?q=${searchGifs.value}&key=${apiKey}`
        );
        return data;
      }
      catch( err ) 
      {
        return console.error( "Error:", err );
      }
    };
    // After API is loaded...
    apiCall().then( gifs => 
    {
      // adds search content function
      let addSearchContent = () => 
      {
        const searchTitle = document.createElement( "p" );
        searchTitle.className = "search-title";
        searchTitle.textContent = `You searched for... ${searchGifs.value}`;
        // this is to refresh the content each time you hit submit
        gifResults.innerHTML = "";
        gifResults.appendChild( searchTitle );
      };
      // run search content function
      addSearchContent();
      // define results depending on how many images we need
      let result1 = gifs.data.results[0];
      let result2 = gifs.data.results[1];
      let result3 = gifs.data.results[2];
      let result4 = gifs.data.results[3];
      let result5 = gifs.data.results[4];
      let result6 = gifs.data.results[5];
      let result7 = gifs.data.results[6];
      let result8 = gifs.data.results[7];
      let result9 = gifs.data.results[8];
      let result10 = gifs.data.results[9];

      //////////////////////////////////////////////////
      // here are the original functions for our array
      //////////////////////////////////////////////////
      const image1 = () => 
      {
        let img1 = document.createElement( "img" );
        img1.src = result1.media[0].gif.url;
        gifResults.appendChild( img1 ); 
      };
    
      const image2 = () => 
      {
        let img2 = document.createElement( "img" );
        img2.src = result2.media[0].gif.url;
        gifResults.appendChild( img2 ); 
      };
    
      const image3 = ()=> 
      {
        let img3 = document.createElement( "img" );
        img3.src = result3.media[0].gif.url;
        gifResults.appendChild( img3 ); 
      };
    
      const image4 = ()=> 
      {
        let img4 = document.createElement( "img" );
        img4.src = result4.media[0].gif.url;
        gifResults.appendChild( img4 ); 
      };
    
      const image5 = () => 
      {
        let img5 = document.createElement( "img" );
        img5.src = result5.media[0].gif.url;
        gifResults.appendChild( img5 ); 
      };
    
      const image6 = () => 
      {
        let img6 = document.createElement( "img" );
        img6.src = result6.media[0].gif.url;
        gifResults.appendChild( img6 ); 
      };
      const image7 = () => 
      {
        let img7 = document.createElement( "img" );
        img7.src = result7.media[0].gif.url;
        gifResults.appendChild( img7 ); 
      };
    
      const image8 = () => 
      {
        let img8 = document.createElement( "img" );
        img8.src = result8.media[0].gif.url;
        gifResults.appendChild( img8 ); 
      };
    
      const image9 = ()=> 
      {
        let img9 = document.createElement( "img" );
        img9.src = result9.media[0].gif.url;
        gifResults.appendChild( img9 ); 
      };
    
      const image10 = ()=>
      {
        let img10 = document.createElement( "img" );
        img10.src = result10.media[0].gif.url;
        gifResults.appendChild( img10 ); 
      };
      // here is an image array that we can filter through to find our functions
      // eslint-disable-next-line max-len
      let imgResultsArray = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ];
      
      // check which button is clicked and return that many gifs function
      let returnGifsBasedOnButtons = () => 
      {
        if( button1.checked ) 
        { 
          let oneImgResult = imgResultsArray.filter( ( element, index ) => index === 0 );
          oneImgResult[0]();
        }
        else if( button4.checked ) 
        { 
          let fourImgResults = imgResultsArray.filter( ( element, index ) => index <= 3 );
          fourImgResults[0]();
          fourImgResults[1]();
          fourImgResults[2]();
          fourImgResults[3]();
        }
        else if( button10.checked ) 
        { 
          let tenImgResults = imgResultsArray.filter( ( element, index ) => index <= 9 );
          tenImgResults[0]();
          tenImgResults[1]();
          tenImgResults[2]();
          tenImgResults[3]();
          tenImgResults[4]();
          tenImgResults[5]();
          tenImgResults[6]();
          tenImgResults[7]();
          tenImgResults[8]();
          tenImgResults[9]();
        }
        else
        { 
          const error = document.createElement( "p" );
          error.className = "error";
          error.textContent = "Yikes! Try refreshing.";
          gifResults.appendChild( error );
        } 
      };
      // run the function
      returnGifsBasedOnButtons();
    } );
  } );
} )();

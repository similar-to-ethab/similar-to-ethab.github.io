if (localStorage.getItem('colormode') == 'dark')
  document.getElementsByTagName('html')[0].classList = 'darkmode';

else if (localStorage.getItem('colormode') == 'light')
  document.getElementsByTagName('html')[0].classList = 'lightmode';

else {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    document.getElementsByTagName('html')[0].classList = 'darkmode';
    console.log('test2');
  }
  else{
    document.getElementsByTagName('html')[0].classList = 'darkmode';
    console.log('test');
  }


  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches)
      document.getElementsByTagName('html')[0].classList = 'darkmode';
    else
      document.getElementsByTagName('html')[0].classList = 'lightmode';
  });
}

function darkmodeLightmode(){
  if (localStorage.getItem('colormode') == 'dark')
    document.getElementsByTagName('html')[0].classList = 'darkmode';

  else if (localStorage.getItem('colormode') == 'light')
    document.getElementsByTagName('html')[0].classList = 'lightmode';

  else {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.getElementsByTagName('html')[0].classList = 'darkmode';
      console.log('test2');
    }
    else{
      document.getElementsByTagName('html')[0].classList = 'darkmode';
      console.log('test');
    }


    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (event.matches)
        document.getElementsByTagName('html')[0].classList = 'darkmode';
      else
        document.getElementsByTagName('html')[0].classList = 'lightmode';
    });
  }

}

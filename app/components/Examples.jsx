var React = require('react')
var{Link} = require('react-router')

var Examples = (props) => {
  return (
    <div>
      <h1 className='center-text'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Roma'>Roma</Link>
        </li>
        <li>
          <Link to='/?location=Palermo'>Palermo</Link>
        </li>

      </ol>
    </div>
    
  )
}

module.exports = Examples

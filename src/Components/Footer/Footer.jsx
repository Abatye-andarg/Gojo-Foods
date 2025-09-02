
import './Footer.css'
function Footer({ isToggled }) {

    return (
        <div className="footer"
              style = {{backgroundColor : isToggled ? "#565c58": "rgba(209, 199, 184, 1)"}}
        >
<h1>&copy;2025 Gojo Foods. All Rights Reserved</h1>
        </div>
    )

}

export default Footer

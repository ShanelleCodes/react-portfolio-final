export default function Footer(){
    return(
        <>
           <footer className="footer">
        <a href="mailto:shanellehaye93@gmail.com" className="footer__link">ShanelleHaye93@gmail.com</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="socail-list__link" target="_blank" rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCpabSA4KaybPjoxM2b_xAFQ">
                <i className="fa-brands fa-youtube"></i></a>
            </li>
            <li className="social-list__item">
                <a className="socail-list__link" target="_blank" rel="noopener noreferrer"
                href="https://github.com/ShanelleCodes">
                <i className="fa-brands fa-github"></i></a>
            </li>
            <li className="social-list__item">
                <a className="socail-list__link" target="_blank" rel="noopener noreferrer"
                href="https://www.linkedin.com/in/shanelle-haye/">
                <i className="fa-brands fa-linkedin"></i></a>
            </li>
        </ul>
    </footer>
        </>
    )
}
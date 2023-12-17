import parse from 'html-react-parser';

const Footer = (props) => {
  return (
    <footer className="footer">
        <div className="footer-text">
            {parse(props.footerText)}
        </div>
        <div className="footer-inner">
            <span>© 2023</span>
            <div className="footer-links">
                <a href={props.githubLink} target='_blank' rel="noreferrer">
                    <div className="github" />
                </a>
                <a href={props.linkedinLink} target='_blank' rel="noreferrer">
                    <div className="linkedin" />
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
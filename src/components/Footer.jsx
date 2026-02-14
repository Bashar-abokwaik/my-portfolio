export default function Footer() {

    function year() {
        const currentYear = new Date().getFullYear();
        return currentYear;
    }
    
    return (    
        <footer className="footer">
            <p>&copy; {year()} My Portfolio</p>
        </footer>
    );
}
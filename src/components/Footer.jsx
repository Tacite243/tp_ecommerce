



export default function Footer() {
    return(
        <footer className="bg-gray-800 text-white py-6 mt-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p>&copy; 2024 E-Shop. All rights reserved.</p>
                <p className="mt-2">
                    <a href="/privacy" className="hover:underline">Privacy Policy</a> | 
                    <a href="/terms" className="hover:underline"> Terms of Service</a>
                </p>
            </div>
        </footer>
    )
}
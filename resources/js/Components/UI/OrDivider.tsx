export default function OrDivider() {
    return (
        <div className="relative w-full py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="bg-black px-4 text-xs font-semibold text-gray-500 tracking-wider uppercase">
                    OR
                </span>
            </div>
        </div>
    );
}

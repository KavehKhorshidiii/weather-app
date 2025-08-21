export default function Spinner() {
    return (
        // Spinner component to indicate loading state
        <div className="flex justify-center items-center h-full">
            {/* Spinning circle */}
            <div className=" size-6 md:size-8 border-4 border-gray-300 border-t-weather-end rounded-full animate-spin"></div>
        </div>
    )
}

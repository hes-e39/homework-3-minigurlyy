import colors from './colors.json';

/**
 * Adding a comment to add feedback
 */

function App() {
    return (
        <div className="app">
            <h1>Color List</h1>
            <ul>
                {colors.map(color => (
                    <li key={color.name} style={{ color: color.hex }}>
                        {color.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

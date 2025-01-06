/**
 * Template scripts for Jmol visualization. These can be used as starting points for custom scripts.
 * For more information on Jmol scripting, refer to the official documentation: http://jmol.sourceforge.net/docs/
 */

export const styleExample1 = `
// --- Overall Settings ---

// Set background to white
background white;

// Turn off cartoon and spacefill
cartoon off;
spacefill off;

// --- Selection ---

// Select the ligand and residues within, e.g., 8 Angstroms
var radius = 8;
select within(radius, (within(molecule, ATP) or within(molecule, MG)));

// --- Representation ---

// Sticks representation
wireframe 0.15;

// --- Coloring ---

// Color the protein light blue
select protein and within(radius, (within(molecule, ATP) or within(molecule, MG)));
color [173,216,230]; // Light blue in RGB

// Color the ligand (ATP)
select within(molecule, ATP);
color carbon [255,200,100]; // Light orange for carbons
color oxygen red;
color nitrogen blue;
color phosphorus yellow;

// Color MG (if present and desired)
select MG;
color magenta;

// --- Hydrogen Bonds and Interactions ---

// Calculate and display hydrogen bonds
calculate hbonds;
select hbonds;
color hbonds blue;
wireframe on;
// set defaultDistanceLabel "%VALUE";
// set hbondlabel off; // remove the default label, it can be turned on if you need.
hbonds 0.05; // make the line thinner.

// Color interactions (if applicable)
// You'll need specific selections for other interaction types if present
// Example:
// select within(distance=4.0, group1=ligand, group2=protein and not :A) // Adjust for pi-stacking
// color [0,255,0]; // Green for pi-stacking
// ... (add other interaction types as needed)

// --- View ---
// Optional: Improve rendering
set antialiasDisplay true;

`;

export const styleExample2 = `
# Clear styles
select all;
wireframe off;
spacefill off;
cartoon off;

// --- Protein Styling ---

// Select only the protein
select protein;

// Display the protein in cartoon representation
cartoon on;

// Color by secondary structure
color structure;

// --- Ligand Styling ---

// Select ATP and MG
select within(molecule, ATP) or within(molecule, MG);

// Display in ball-and-stick
spacefill 20%; // Use percentages for relative sizing
wireframe 0.15;

// Color ATP by element (CPK)
color cpk;

// Explicitly color MG (Magnesium)
select MG;
color magenta;

// --- Water Styling ---
// Optionally, hide water molecules or style them differently:
select water;
spacefill off; // Or use spacefill 15% and color [0.5,0.5,1] for light blue

// --- View ---
// Optional: Improve rendering
set antialiasDisplay true;

`;

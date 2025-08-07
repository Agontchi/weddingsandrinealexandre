'use client'

import React, { useState, useEffect, useRef } from 'react'

interface GuestInfo {
  name: string;
  tableNumber: string;
  seatPosition?: number; // Position at the table (1-8, clockwise)
  restrictionAlimentaire?: string; // Dietary restrictions
}

// Define tables with their positions in the layout
interface TablePosition {
  x: number;
  y: number;
  label: string;
  seats: number;
}

// Define table positions in the SVG layout
const tables: Record<string, TablePosition> = {
  "1": { x: 550, y: 150, label: "Table 1", seats: 8 },
  "2": { x: 280, y: 250, label: "Table 2", seats: 8 },
  "3": { x: 150, y: 450, label: "Table 3", seats: 7 },
  "4": { x: 200, y: 700, label: "Table 4", seats: 8 },
  "5": { x: 420, y: 850, label: "Table 5", seats: 7 },
  "6": { x: 680, y: 850, label: "Table 6", seats: 7 },
  "7": { x: 900, y: 700, label: "Table 7", seats: 8 },
  "8": { x: 950, y: 450, label: "Table 8", seats: 8 },
  "9": { x: 800, y: 250, label: "Table 9", seats: 9 },
};

const guests: GuestInfo[] = [
  // Table 1 - Mariés et temoins
  { name: "Alexandre Gontcharov", tableNumber: "1", seatPosition: 1, restrictionAlimentaire: "Aucune" },
  { name: "Sandrine Carey", tableNumber: "1", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Mélodie Carey", tableNumber: "1", seatPosition: 3, restrictionAlimentaire: "Vegetarienne" },
  { name: "Zoé Gregoire", tableNumber: "1", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Anastasia Gontcharova", tableNumber: "1", seatPosition: 5, restrictionAlimentaire: "Aucune" },
  { name: "Raphael Gontcharov", tableNumber: "1", seatPosition: 7, restrictionAlimentaire: "Aucune" },
  { name: "Daniel Gontcharov", tableNumber: "1", seatPosition: 8, restrictionAlimentaire: "Aucune" },
  { name: "Maxence Frisson", tableNumber: "1", seatPosition: 6, restrictionAlimentaire: "Aucune" },
  
  
  // Table 2 - Famille Sandrine
  { name: "Manon Dumas", tableNumber: "2", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Serge Carey", tableNumber: "2", seatPosition: 1, restrictionAlimentaire: "Aucune" },
  { name: "Justine Leroux", tableNumber: "2", seatPosition: 3, restrictionAlimentaire: "Aucune" },
  { name: "Thomas Byette", tableNumber: "2", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Rosalie Byette", tableNumber: "2", seatPosition: 5, restrictionAlimentaire: "Aucune" },
  { name: "Caroline Landry", tableNumber: "2", seatPosition: 6, restrictionAlimentaire: "Intolérance lactose" },
  { name: "Marie-Josée Guenette", tableNumber: "2", seatPosition: 7, restrictionAlimentaire: "Sans Gluten" },
  { name: "Emerick Jodoin", tableNumber: "2", seatPosition: 8, restrictionAlimentaire: "Aucune" },

  // Table 3 - Amis de Famille Gontcharov
  
  { name: "Anna Hogg", tableNumber: "3", seatPosition: 1, restrictionAlimentaire: "Aucune" },
  { name: "Helena Semikina", tableNumber: "3", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Alexandre Petsikau", tableNumber: "3", seatPosition: 3, restrictionAlimentaire: "Aucune" },
  { name: "David Pottier", tableNumber: "3", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Corinne Pottier", tableNumber: "3", seatPosition: 5, restrictionAlimentaire: "Aucune" },
  { name: "Mathieu Pottier", tableNumber: "3", seatPosition: 6, restrictionAlimentaire: "Aucune" },
  { name: "Ethan Pottier", tableNumber: "3", seatPosition: 7, restrictionAlimentaire: "Aucune" },
  
  
  // Table 4 - Amis de Sandrine & Alexandre
  { name: "Pierre Andrea Lang", tableNumber: "4", seatPosition: 1, restrictionAlimentaire: "Aucune" },
  { name: "Marine Antmann", tableNumber: "4", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Caroline Montécot", tableNumber: "4", seatPosition: 3, restrictionAlimentaire: "Aucune" },
  { name: "Pierre Le Houarner", tableNumber: "4", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Melissa Anderson", tableNumber: "4", seatPosition: 5, restrictionAlimentaire: "Aucune" },
  { name: "Hugo Charon", tableNumber: "4", seatPosition: 6, restrictionAlimentaire: "Aucune" },
  { name: "Warren Anslem", tableNumber: "4", seatPosition: 7, restrictionAlimentaire: "Crustacés et poissons" },
  { name: "Rachelle Shapiro", tableNumber: "4", seatPosition: 8, restrictionAlimentaire: "Allergies: toutes noix sauf cacahuète; mange pas de crustacés" },
  
  // Table 5 - Amis de Sandrine & Alexandre
  { name: "Margaux Farreng", tableNumber: "5", seatPosition: 1, restrictionAlimentaire: "Crustacés et poissons" },
  { name: "Alex Caillé", tableNumber: "5", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Virginia Arrambide-Suarez", tableNumber: "5", seatPosition: 3, restrictionAlimentaire: "Aucune" },
  { name: "Lucas Lebon", tableNumber: "5", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Augustin Commun", tableNumber: "5", seatPosition: 5, restrictionAlimentaire: "Aucune" },
  { name: "Georges Marcos", tableNumber: "5", seatPosition: 6, restrictionAlimentaire: "Aucune" },
  { name: "Jean Baptiste Gerbouin", tableNumber: "5", seatPosition: 7, restrictionAlimentaire: "Aucune" },

  // Table 6 - Amis de Sandrine & Alexandre
  { name: "Lukas Tsiptsios", tableNumber: "6", seatPosition: 1, restrictionAlimentaire: "Allergie: Noisettes, cerises, pêches, abricot, pommes" },
  { name: "Eva Rodrigues Gregorio", tableNumber: "6", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Arielle Rolland", tableNumber: "6", seatPosition: 3, restrictionAlimentaire: "Vegetarienne" },
  { name: "Jean Baptiste Boyssou", tableNumber: "6", seatPosition: 4, restrictionAlimentaire: "Vegetarienne" },
  { name: "Mei Ju Goemans", tableNumber: "6", seatPosition: 5, restrictionAlimentaire: "Vegetarienne" },
  { name: "Alexandre Mérian", tableNumber: "6", seatPosition: 6, restrictionAlimentaire: "Aucune" },
  { name: "Joséphine Quentel", tableNumber: "6", seatPosition: 7, restrictionAlimentaire: "Aucune" },
  
  // Table 7 - Amis de Sandrine
  { name: "Jonathan", tableNumber: "7", seatPosition: 1, restrictionAlimentaire: "Aucune" },
  { name: "Alexandre Viau", tableNumber: "7", seatPosition: 2, restrictionAlimentaire: "Aucune" },  
  { name: "Gauthier Ory", tableNumber: "7", seatPosition: 3, restrictionAlimentaire: "Aucune" },
  { name: "Allan Lachhar", tableNumber: "7", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Victoria Nope Viau", tableNumber: "7", seatPosition: 5, restrictionAlimentaire: "Bébé" },
  { name: "Noélie Nope Viau", tableNumber: "7", seatPosition: 6, restrictionAlimentaire: "Enfant" },
  { name: "Nathalie Nope Hernandez", tableNumber: "7", seatPosition: 7, restrictionAlimentaire: "Aucune" },
  { name: "Marianne Corbeil", tableNumber: "7", seatPosition: 8, restrictionAlimentaire: "Aucune" },

  // Table 8 - Famille Gontcharov + Amis de Alexandre
  { name: "Anatoliy Gontcharov", tableNumber: "8", seatPosition: 1, restrictionAlimentaire: "Aucune" },
  { name: "Tamara Gontcharova", tableNumber: "8", seatPosition: 2, restrictionAlimentaire: "Aucune" },
  { name: "Alexandra Frisson", tableNumber: "8", seatPosition: 3, restrictionAlimentaire: "Intolérance lactose" },
  { name: "Tania Feldman", tableNumber: "8", seatPosition: 4, restrictionAlimentaire: "Aucune" },
  { name: "Masha Kolisnechenko", tableNumber: "8", seatPosition: 5, restrictionAlimentaire: "Aucune" },
  { name: "Lisa Kolisnechenko", tableNumber: "8", seatPosition: 6, restrictionAlimentaire: "Aucune" },
  { name: "Matveï", tableNumber: "8", seatPosition: 7, restrictionAlimentaire: "Aucune" },
  { name: "Eve Sersic", tableNumber: "8", seatPosition: 8, restrictionAlimentaire: "Aucune" },

 // Table 9 - Famille Gontcharov + Amis des Gontcharov
 { name: "Helena Gontcharova", tableNumber: "9", seatPosition: 1, restrictionAlimentaire: "Aucune" },
 { name: "Yevgen Bolyukh", tableNumber: "9", seatPosition: 2, restrictionAlimentaire: "Aucune" },
 { name: "Olga Gontcharova", tableNumber: "9", seatPosition: 3, restrictionAlimentaire: "Aucune" },
 { name: "Masha Gontcharova", tableNumber: "9", seatPosition: 4, restrictionAlimentaire: "Enfant" },
 { name: "Mark Petsikau", tableNumber: "9", seatPosition: 5, restrictionAlimentaire: "Aucune" },
 { name: "Daniil Shuliaiev", tableNumber: "9", seatPosition: 6, restrictionAlimentaire: "Aucune" },
 { name: "Olivia Shuliaieva Gontcharova", tableNumber: "9", seatPosition: 7, restrictionAlimentaire: "Bébé" },
 { name: "Helena Feldman", tableNumber: "9", seatPosition: 8, restrictionAlimentaire: "Aucune" },
 { name: "Alexander Kolisnechenko", tableNumber: "9", seatPosition: 9, restrictionAlimentaire: "Aucune" }
  
  // Add more guests as needed
];

// Calculate seat position around a circular table
const calculateSeatPosition = (tableX: number, tableY: number, seatPosition: number, seatCount: number, tableRadius: number) => {
  // Start at 11 o'clock (seat #1) and go clockwise
  // Add an offset to start at 11 o'clock instead of 12 o'clock
  const offsetAngle = -Math.PI * .63; // -60 degrees to start at 11 o'clock
  const angle = (seatPosition - 1) * (2 * Math.PI / seatCount) + offsetAngle;
  const x = tableX + tableRadius * Math.cos(angle);
  const y = tableY + tableRadius * Math.sin(angle);
  return { x, y };
};

// Get initials from a name
const getInitials = (name: string): string => {
  if (!name || name.trim() === '') return '';
  
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0].charAt(0);
  
  // Get first letter of first name and first letter of last name
  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`;
};

// Get display name for hover (first name + last initial)
// Commented out as it's not currently used but may be needed in the future
/* 
const getDisplayName = (name: string): string => {
  if (!name || name.trim() === '') return '';
  
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0];
  
  // First name + last name initial
  return `${parts[0]} ${parts[parts.length - 1].charAt(0)}.`;
};
*/

const SeatingPlan = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<GuestInfo[]>([]);
  const [highlightedGuest, setHighlightedGuest] = useState<GuestInfo | null>(null);
  const [clickedSeat, setClickedSeat] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Constants for the SVG diagram
  const svgWidth = 1100;
  const svgHeight = 1100;
  const tableRadius = 70;
  const seatRadius = 15;
  
  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSuggestions([]);
      return;
    }

    const filtered = guests.filter(guest =>
      guest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSuggestions(filtered);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setHighlightedGuest(null);
  };

  const handleSelectGuest = (guest: GuestInfo) => {
    setHighlightedGuest(guest);
    setSearchTerm(guest.name);
    setSuggestions([]);
  };
  
  // Generate table and seat elements for the SVG
  const renderTables = () => {
    return Object.entries(tables).map(([tableNumber, table]) => {
      // Get guests at this table
      const tableGuests = guests.filter(g => g.tableNumber === tableNumber);
      
      // Create seats around the table
      const seats = [];
      for (let i = 1; i <= table.seats; i++) {
        const seatPosition = calculateSeatPosition(table.x, table.y, i, table.seats, tableRadius + 20);
        const guest = tableGuests.find(g => g.seatPosition === i);
        
        // Determine if this seat should be highlighted
        const isHighlighted = highlightedGuest && 
          highlightedGuest.tableNumber === tableNumber && 
          highlightedGuest.seatPosition === i;
        
        seats.push(
          <g key={`table-${tableNumber}-seat-${i}`}>
            {/* Seat circle */}
            <circle 
              cx={seatPosition.x} 
              cy={seatPosition.y} 
              r={seatRadius}
              fill={isHighlighted ? '#FF4081' : '#FFFFFF'}
              stroke={isHighlighted ? '#FF4081' : '#000000'}
              strokeWidth={isHighlighted ? 3 : 1}
              className={isHighlighted ? 'animate-pulse' : ''}
            />
            
            {/* Initials inside circle */}
            {guest && (
              <text 
                x={seatPosition.x} 
                y={seatPosition.y} 
                textAnchor="middle" 
                dominantBaseline="middle"
                fontSize={seatRadius * 0.9}
                fill={isHighlighted ? '#FFFFFF' : '#000000'}
                fontWeight="bold"
              >
                {getInitials(guest.name)}
              </text>
            )}
            
            {/* Click to show full name */}
            {guest && (
              <>
                <circle 
                  cx={seatPosition.x} 
                  cy={seatPosition.y} 
                  r={seatRadius}
                  fill="transparent"
                  stroke="transparent"
                  className="cursor-pointer"
                  onClick={() => setClickedSeat(clickedSeat === `${tableNumber}-${i}` ? null : `${tableNumber}-${i}`)}
                />
                
                {/* Show name label if this seat is clicked */}
                {clickedSeat === `${tableNumber}-${i}` && (
                  <>
                    {/* Name label with background */}
                    <g>
                      <rect
                        x={seatPosition.x - 90}
                        y={seatPosition.y - 60}
                        width={180}
                        height={guest.restrictionAlimentaire && guest.restrictionAlimentaire !== "Aucune" ? 50 : 30}
                        rx={5}
                        fill="rgba(0,0,0,0.8)"
                        stroke="#fff"
                        strokeWidth={1}
                      />
                      
                      <text
                        x={seatPosition.x}
                        y={seatPosition.y - 45}
                        textAnchor="middle"
                        fill="white"
                        fontSize={14}
                        fontWeight="bold"
                      >
                        {guest.name}
                      </text>

                      {guest.restrictionAlimentaire && guest.restrictionAlimentaire !== "Aucune" && (
                        <text
                          x={seatPosition.x}
                          y={seatPosition.y - 25}
                          textAnchor="middle"
                          fill="#FF9999"
                          fontSize={12}
                        >
                          {guest.restrictionAlimentaire}
                        </text>
                      )}
                    </g>
                  </>
                )}
              </>
            )}
          </g>
        );
      }
      
      return (
        <g key={`table-${tableNumber}`}>
          {/* Table */}
          <circle 
            cx={table.x} 
            cy={table.y} 
            r={tableRadius}
            fill="#F5F5F5"
            stroke="#000000"
            strokeWidth="2"
          />
          {/* Table label */}
          <text 
            x={table.x} 
            y={table.y} 
            textAnchor="middle" 
            dominantBaseline="middle"
            fontSize="16"
            fontWeight="bold"
          >
            Table {tableNumber}
          </text>
          {/* Seats */}
          {seats}
        </g>
      );
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <label htmlFor="guest-search" className="block text-sm font-medium mb-2">
          Recherchez votre nom :
        </label>
        <div className="relative">
          <input
            id="guest-search"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Entrez votre nom..."
          />
          {suggestions.length > 0 && (
            <div className="absolute z-10 w-full bg-white mt-1 shadow-lg rounded-md border border-gray-200 max-h-60 overflow-auto">
              {suggestions.map((guest, index) => (
                <div
                  key={index}
                  className="p-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
                  onClick={() => handleSelectGuest(guest)}
                >
                  <div className="font-medium">{guest.name}</div>
                  <div className="text-sm text-gray-500">Table {guest.tableNumber}</div>
                  {guest.restrictionAlimentaire && guest.restrictionAlimentaire !== "Aucune" && (
                    <div className="text-sm text-rose-500 mt-1">{guest.restrictionAlimentaire}</div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="relative w-full overflow-auto border border-gray-200 rounded-lg">
        <svg 
          ref={svgRef}
          width="100%" 
          height="100%"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          className="bg-white"
        >
          {/* Title */}
          <text 
            x={svgWidth / 2} 
            y="30" 
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
          >
            Plan de Table - Dîner de Mariage
          </text>
          
          {/* Legend */}
          <g transform="translate(50, 70)">
            <rect x="0" y="0" width="20" height="20" fill="#FFFFFF" stroke="#000000" />
            <text x="30" y="15" fontSize="14">Place standard</text>
            
            <rect x="150" y="0" width="20" height="20" fill="#FF4081" stroke="#FF4081" />
            <text x="180" y="15" fontSize="14">Votre place</text>
          </g>
          
          {/* Tables and seats */}
          {renderTables()}
          
          {/* Room label */}
          <text 
            x={svgWidth / 2} 
            y={svgHeight - 20} 
            textAnchor="middle"
            fontSize="18"
            fontStyle="italic"
          >
            Salle de Réception - Orangerie - Château de Percey
          </text>
        </svg>
      </div>
      
      <div className="mt-4 p-4 bg-light rounded-md">
        <p className="text-center italic">
          Ce plan est indicatif. Les tables définitives seront confirmées le jour de l&apos;événement.
        </p>
      </div>
    </div>
  );
};

export default SeatingPlan;

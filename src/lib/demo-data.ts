// Demo data for DealerOS — South African context

export const demoOrganization = {
  id: "org_demo",
  name: "Velocity Motors Group",
  slug: "velocity-motors",
  phone: "+27 11 234 5678",
  email: "info@velocitymotors.co.za",
  website: "https://velocitymotors.co.za",
  city: "Johannesburg",
  province: "Gauteng",
  tier: "GROWTH" as const,
  status: "ACTIVE" as const,
};

export const demoBranches = [
  { id: "br_sandton", name: "Velocity Motors Sandton", slug: "sandton", city: "Sandton", province: "Gauteng", isHeadOffice: true, isActive: true },
  { id: "br_centurion", name: "Velocity Motors Centurion", slug: "centurion", city: "Centurion", province: "Gauteng", isHeadOffice: false, isActive: true },
  { id: "br_capetown", name: "Velocity Motors Cape Town", slug: "cape-town", city: "Cape Town", province: "Western Cape", isHeadOffice: false, isActive: true },
];

export const demoUsers = [
  { id: "usr_1", name: "Thabo Mokoena", email: "thabo@velocitymotors.co.za", role: "DEALER_ADMIN", branchId: "br_sandton" },
  { id: "usr_2", name: "Sarah van der Merwe", email: "sarah@velocitymotors.co.za", role: "BRANCH_MANAGER", branchId: "br_sandton" },
  { id: "usr_3", name: "James Naidoo", email: "james@velocitymotors.co.za", role: "SALESPERSON", branchId: "br_sandton" },
  { id: "usr_4", name: "Sipho Dlamini", email: "sipho@velocitymotors.co.za", role: "SALESPERSON", branchId: "br_sandton" },
  { id: "usr_5", name: "Lerato Molefe", email: "lerato@velocitymotors.co.za", role: "SALESPERSON", branchId: "br_centurion" },
  { id: "usr_6", name: "Pieter du Plessis", email: "pieter@velocitymotors.co.za", role: "BRANCH_MANAGER", branchId: "br_capetown" },
];

export const demoVehicles = [
  { id: "veh_1", stockNumber: "STK-10001", make: "Toyota", model: "Hilux", variant: "2.8 GD-6 Legend RS 4x4 Auto", year: 2024, mileage: 1200, colour: "Glacier White", condition: "NEW", status: "AVAILABLE", costPrice: 72500000, askingPrice: 84990000, transmission: "Automatic", fuelType: "Diesel", bodyType: "Double Cab", branchId: "br_sandton" },
  { id: "veh_2", stockNumber: "STK-10002", make: "Volkswagen", model: "Polo", variant: "1.0 TSI Life", year: 2023, mileage: 22000, colour: "Reflex Silver", condition: "USED", status: "AVAILABLE", costPrice: 26000000, askingPrice: 31990000, transmission: "Manual", fuelType: "Petrol", bodyType: "Hatchback", branchId: "br_sandton" },
  { id: "veh_3", stockNumber: "STK-10003", make: "BMW", model: "3 Series", variant: "320d M Sport", year: 2022, mileage: 45000, colour: "Black Sapphire", condition: "USED", status: "AVAILABLE", costPrice: 48000000, askingPrice: 57990000, transmission: "Automatic", fuelType: "Diesel", bodyType: "Sedan", branchId: "br_sandton" },
  { id: "veh_4", stockNumber: "STK-10004", make: "Ford", model: "Ranger", variant: "2.0 Bi-Turbo Wildtrak 4x4 Auto", year: 2024, mileage: 500, colour: "Meteor Grey", condition: "NEW", status: "RESERVED", costPrice: 68000000, askingPrice: 79990000, transmission: "Automatic", fuelType: "Diesel", bodyType: "Double Cab", branchId: "br_sandton" },
  { id: "veh_5", stockNumber: "STK-10005", make: "Mercedes-Benz", model: "C-Class", variant: "C200 AMG Line", year: 2023, mileage: 18000, colour: "Obsidian Black", condition: "USED", status: "AVAILABLE", costPrice: 62000000, askingPrice: 72990000, transmission: "Automatic", fuelType: "Petrol", bodyType: "Sedan", branchId: "br_sandton" },
  { id: "veh_6", stockNumber: "STK-10006", make: "Hyundai", model: "Creta", variant: "1.5 Executive IVT", year: 2024, mileage: 0, colour: "Titan Grey", condition: "NEW", status: "AVAILABLE", costPrice: 38000000, askingPrice: 44990000, transmission: "Automatic", fuelType: "Petrol", bodyType: "SUV", branchId: "br_centurion" },
  { id: "veh_7", stockNumber: "STK-10007", make: "Isuzu", model: "D-Max", variant: "3.0 TD LSE 4x4 Auto", year: 2023, mileage: 35000, colour: "Splash White", condition: "USED", status: "SOLD", costPrice: 55000000, askingPrice: 64990000, transmission: "Automatic", fuelType: "Diesel", bodyType: "Double Cab", branchId: "br_centurion" },
  { id: "veh_8", stockNumber: "STK-10008", make: "Audi", model: "A3", variant: "1.4 TFSI Sportback S-Line", year: 2022, mileage: 52000, colour: "Navarra Blue", condition: "USED", status: "AVAILABLE", costPrice: 35000000, askingPrice: 41990000, transmission: "Automatic", fuelType: "Petrol", bodyType: "Hatchback", branchId: "br_capetown" },
];

export const demoLeads = [
  { id: "lead_1", firstName: "Andile", lastName: "Mthembu", email: "andile@gmail.com", phone: "0821234567", source: "WHATSAPP", status: "NEW", budget: 50000000, salespersonId: "usr_3", vehicleId: "veh_1", branchId: "br_sandton", createdAt: "2025-03-28" },
  { id: "lead_2", firstName: "Michelle", lastName: "Botha", email: "michelle.b@outlook.com", phone: "0839876543", source: "AUTOTRADER", status: "CONTACTED", budget: 35000000, salespersonId: "usr_3", vehicleId: "veh_2", branchId: "br_sandton", createdAt: "2025-03-27" },
  { id: "lead_3", firstName: "Raj", lastName: "Pillay", email: "raj.pillay@company.co.za", phone: "0841112222", source: "WEBSITE", status: "TEST_DRIVE", budget: 60000000, salespersonId: "usr_4", vehicleId: "veh_3", branchId: "br_sandton", createdAt: "2025-03-25" },
  { id: "lead_4", firstName: "Zanele", lastName: "Khumalo", email: "zanele.k@icloud.com", phone: "0723334444", source: "FACEBOOK", status: "QUOTE_SENT", budget: 80000000, salespersonId: "usr_4", vehicleId: "veh_4", branchId: "br_sandton", createdAt: "2025-03-24" },
  { id: "lead_5", firstName: "Hendrik", lastName: "Joubert", email: "hjoubert@gmail.com", phone: "0605556666", source: "WALK_IN", status: "NEGOTIATING", budget: 75000000, salespersonId: "usr_3", vehicleId: "veh_5", branchId: "br_sandton", createdAt: "2025-03-22" },
  { id: "lead_6", firstName: "Fatima", lastName: "Essop", email: "fatima.e@gmail.com", phone: "0817778888", source: "CARS_CO_ZA", status: "NEW", budget: 45000000, salespersonId: "usr_5", vehicleId: "veh_6", branchId: "br_centurion", createdAt: "2025-03-29" },
  { id: "lead_7", firstName: "David", lastName: "Swanepoel", email: "david.s@business.co.za", phone: "0829991111", source: "PHONE", status: "CLOSED_WON", budget: 65000000, salespersonId: "usr_5", vehicleId: "veh_7", branchId: "br_centurion", createdAt: "2025-03-15" },
  { id: "lead_8", firstName: "Nomsa", lastName: "Ndlovu", email: "nomsa.n@yahoo.com", phone: "0732223333", source: "REFERRAL", status: "CONTACTED", budget: 42000000, salespersonId: "usr_6", vehicleId: "veh_8", branchId: "br_capetown", createdAt: "2025-03-26" },
  { id: "lead_9", firstName: "Liam", lastName: "O'Connor", email: "liam@techco.co.za", phone: "0614445555", source: "WEBSITE", status: "CLOSED_LOST", budget: 90000000, salespersonId: "usr_3", vehicleId: null, branchId: "br_sandton", createdAt: "2025-03-10" },
  { id: "lead_10", firstName: "Precious", lastName: "Mahlangu", email: "precious.m@gmail.com", phone: "0826667777", source: "WHATSAPP", status: "NEW", budget: 33000000, salespersonId: "usr_4", vehicleId: "veh_2", branchId: "br_sandton", createdAt: "2025-03-30" },
];

export const demoQuotes = [
  { id: "qt_1", quoteNumber: "QT-2503-1001", status: "SENT", vehiclePrice: 84990000, discount: 2000000, tradeInValue: 15000000, deposit: 5000000, fees: 350000, totalAmount: 63340000, leadId: "lead_4", vehicleId: "veh_4", branchId: "br_sandton", createdById: "usr_4", createdAt: "2025-03-24" },
  { id: "qt_2", quoteNumber: "QT-2503-1002", status: "ACCEPTED", vehiclePrice: 72990000, discount: 0, tradeInValue: 20000000, deposit: 10000000, fees: 350000, totalAmount: 43340000, leadId: "lead_5", vehicleId: "veh_5", branchId: "br_sandton", createdById: "usr_3", createdAt: "2025-03-22" },
  { id: "qt_3", quoteNumber: "QT-2503-1003", status: "ACCEPTED", vehiclePrice: 64990000, discount: 1500000, tradeInValue: 0, deposit: 8000000, fees: 350000, totalAmount: 55840000, leadId: "lead_7", vehicleId: "veh_7", branchId: "br_centurion", createdById: "usr_5", createdAt: "2025-03-16" },
];

export const demoFinanceDeals = [
  { id: "fin_1", status: "SUBMITTED", bank: "Absa", financeAmount: 63340000, interestRate: 11.5, term: 72, monthlyPayment: 1230000, balloonPayment: 15000000, depositAmount: 5000000, leadId: "lead_4", quoteId: "qt_1", branchId: "br_sandton" },
  { id: "fin_2", status: "APPROVED", bank: "Standard Bank", financeAmount: 43340000, interestRate: 10.75, term: 60, monthlyPayment: 950000, balloonPayment: 10000000, depositAmount: 10000000, leadId: "lead_5", quoteId: "qt_2", branchId: "br_sandton" },
  { id: "fin_3", status: "FUNDED", bank: "Nedbank", financeAmount: 55840000, interestRate: 12.0, term: 72, monthlyPayment: 1100000, balloonPayment: 12000000, depositAmount: 8000000, leadId: "lead_7", quoteId: "qt_3", branchId: "br_centurion" },
];

export const demoTestDrives = [
  { id: "td_1", status: "COMPLETED", scheduledAt: "2025-03-25T10:00:00", duration: 30, licenseVerified: true, feedback: "Customer loved the power. Very interested.", leadId: "lead_3", vehicleId: "veh_3", salespersonId: "usr_4", branchId: "br_sandton" },
  { id: "td_2", status: "SCHEDULED", scheduledAt: "2025-03-31T14:00:00", duration: null, licenseVerified: false, leadId: "lead_1", vehicleId: "veh_1", salespersonId: "usr_3", branchId: "br_sandton" },
  { id: "td_3", status: "CONFIRMED", scheduledAt: "2025-03-31T09:30:00", duration: null, licenseVerified: true, leadId: "lead_6", vehicleId: "veh_6", salespersonId: "usr_5", branchId: "br_centurion" },
];

export const demoFollowUps = [
  { id: "fu_1", type: "WHATSAPP", status: "PENDING", title: "Follow up on Hilux enquiry", dueAt: "2025-03-31T09:00:00", leadId: "lead_1", assignedToId: "usr_3", isAutomated: true },
  { id: "fu_2", type: "PHONE_CALL", status: "PENDING", title: "Call re: Polo test drive", dueAt: "2025-03-31T11:00:00", leadId: "lead_2", assignedToId: "usr_3", isAutomated: false },
  { id: "fu_3", type: "EMAIL", status: "COMPLETED", title: "Send quote follow-up", dueAt: "2025-03-28T10:00:00", leadId: "lead_4", assignedToId: "usr_4", isAutomated: true },
  { id: "fu_4", type: "SMS", status: "OVERDUE", title: "Payment reminder", dueAt: "2025-03-27T08:00:00", leadId: "lead_5", assignedToId: "usr_3", isAutomated: true },
  { id: "fu_5", type: "TASK", status: "PENDING", title: "Prepare delivery documents", dueAt: "2025-04-01T08:00:00", leadId: "lead_7", assignedToId: "usr_5", isAutomated: false },
];

// Monthly stats for charts
export const demoMonthlyStats = [
  { month: "Oct", leads: 42, sales: 8, revenue: 480000000 },
  { month: "Nov", leads: 55, sales: 12, revenue: 720000000 },
  { month: "Dec", leads: 38, sales: 10, revenue: 650000000 },
  { month: "Jan", leads: 60, sales: 14, revenue: 890000000 },
  { month: "Feb", leads: 48, sales: 11, revenue: 710000000 },
  { month: "Mar", leads: 65, sales: 15, revenue: 950000000 },
];

export const demoLeadSourceStats = [
  { source: "WhatsApp", count: 28, percentage: 22 },
  { source: "AutoTrader", count: 24, percentage: 19 },
  { source: "Website", count: 22, percentage: 17 },
  { source: "Facebook", count: 18, percentage: 14 },
  { source: "Walk-in", count: 15, percentage: 12 },
  { source: "Cars.co.za", count: 12, percentage: 9 },
  { source: "Phone", count: 5, percentage: 4 },
  { source: "Referral", count: 4, percentage: 3 },
];

export const demoSalespersonStats = [
  { name: "James Naidoo", leads: 35, sales: 8, revenue: 520000000, conversionRate: 23 },
  { name: "Sipho Dlamini", leads: 30, sales: 7, revenue: 480000000, conversionRate: 23 },
  { name: "Lerato Molefe", leads: 22, sales: 5, revenue: 310000000, conversionRate: 23 },
  { name: "Pieter du Plessis", leads: 18, sales: 3, revenue: 185000000, conversionRate: 17 },
];

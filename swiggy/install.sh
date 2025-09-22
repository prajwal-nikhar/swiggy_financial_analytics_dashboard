#!/bin/bash
# Power BI Financial Dashboard Installation Script

echo "🚀 Installing Advanced Financial Performance Dashboard..."

# Check if Power BI Desktop is installed
if ! command -v "C:\Program Files\Microsoft Power BI Desktopin\PBIDesktop.exe" &> /dev/null; then
    echo "❌ Power BI Desktop not found. Please install Power BI Desktop first."
    echo "Download from: https://powerbi.microsoft.com/desktop/"
    exit 1
fi

echo "✅ Power BI Desktop found"

# Create project directory structure
echo "📁 Creating project directory structure..."
mkdir -p data
mkdir -p templates
mkdir -p documentation
mkdir -p screenshots
mkdir -p dax_measures

# Move data files to data directory
echo "📊 Organizing data files..."
mv *.csv data/ 2>/dev/null || echo "No CSV files to move"

# Create template structure
echo "📋 Setting up templates..."
cat > templates/dashboard_template.pbit << EOF
{
  "version": "1.0",
  "dataSchema": {
    "tables": ["Financial_Performance", "Budget_Actual", "Cost_Center", "Cash_Flow", "Financial_KPIs"],
    "relationships": "Star schema with Date table as dimension"
  },
  "visualizations": {
    "executive_summary": "KPI cards with sparklines and conditional formatting",
    "variance_analysis": "Matrix with traffic light indicators",
    "trend_analysis": "Line charts with forecasting"
  }
}
EOF

echo "✅ Installation completed successfully!"
echo "📖 Next steps:"
echo "   1. Open Power BI Desktop"
echo "   2. Load data from the data/ directory"
echo "   3. Import DAX measures from dax_measures/"
echo "   4. Follow the README.md for detailed setup instructions"

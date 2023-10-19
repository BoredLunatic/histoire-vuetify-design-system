#!/bin/bash

# ANSI color codes
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

header() {
    echo -e "${YELLOW}"
    cat << "EOF"
:::    ::: :::     ::: :::::::::   ::::::::  
:+:    :+: :+:     :+: :+:    :+: :+:    :+: 
+:+    +:+ +:+     +:+ +:+    +:+ +:+        
+#++:++#++ +#+     +:+ +#+    +:+ +#++:++#++ 
+#+    +#+  +#+   +#+  +#+    +#+        +#+ 
#+#    #+#   #+#+#+#   #+#    #+# #+#    #+# 
###    ###     ###     #########   ########  
EOF
    echo -e "${NC}"
    echo -e "${YELLOW}$1${NC}"
}

task() {
    echo -e "${BLUE}----------------------------------------------${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}----------------------------------------------${NC}"
}

completed() {
    echo -e "${GREEN}$1${NC}"
}

run_section() {
    if [ "$interactive" == "true" ]; then
        read -p "Do you want to run this section? (y/n): " choice
        if [ "$choice" == "n" ]; then
            echo "Skipping this section."
            return
        fi
    fi

    eval "$1"
}

# Main Script
interactive="true"

for arg in "$@"; do
    case "$arg" in
        --non-interactive)
            interactive="false"
            ;;
    esac
done

header "Starting Histoire Vuetify Design System Build"

tasks=("Linting", "Prettifying", "Building Vite" "Building Types" "Building Story" "Additional Files")
commands=("npm run lint" "npm run format" "npm run build:vite" "npm run build:types" "npm run story:build" "touch ./docs/.nojekyll")

for ((i=0; i<${#tasks[@]}; i++)); do
    task "$((i+1))/${#tasks[@]} ${tasks[i]}...."
    run_section "${commands[i]}"
done

completed "Build completed."
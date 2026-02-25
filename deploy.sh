#!/bin/bash

echo "🚀 Preparando deploy para GitHub..."

# Fazer push
git push -u origin master --force

echo ""
echo "✅ Código enviado para GitHub!"
echo ""
echo "📝 Próximos passos para deploy no Vercel:"
echo ""
echo "1. Acesse: https://vercel.com/new"
echo "2. Faça login com GitHub"
echo "3. Selecione o repositório: SoftHam-704/reprodrigues"
echo "4. Configure:"
echo "   - Framework: Vite"
echo "   - Build Command: npm run build"
echo "   - Output Directory: dist"
echo "5. Clique em Deploy"
echo ""
echo "🌐 Seu site estará em: https://reprodrigues.vercel.app"

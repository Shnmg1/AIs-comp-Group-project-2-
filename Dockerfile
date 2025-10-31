# Build stage: restore and publish the ASP.NET Core API
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy solution and project files for restore
COPY AIs-comp-Group-project-2-.sln ./
COPY api/QualityEducationAPI.csproj api/
RUN dotnet restore api/QualityEducationAPI.csproj

# Copy the remaining source code and publish
COPY api/ api/
WORKDIR /src/api
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Runtime stage: run the published app
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copy published output from build stage
COPY --from=build /app/publish .

# Copy static assets needed by the API's static file endpoints
COPY Pages /Pages
COPY frontend /frontend

# Railway provides the PORT environment variable; default to 8080 when missing
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Production
EXPOSE 8080

ENTRYPOINT ["dotnet", "QualityEducationAPI.dll"]

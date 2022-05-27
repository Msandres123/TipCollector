using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Migrations
{
    public partial class IdentityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1ad2d335-9589-4813-a796-57eccf4aa091");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c84df75f-d0d1-4c23-bd19-9151c86b7393");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "11c1ac28-522c-41c9-9393-fbf29c1d41ed", "9a0c2aa5-d80c-4615-a8d6-04907fde7e78", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "341ecf36-6f35-45d6-9bb9-1578bb585a63", "855edb4e-14f9-468c-a28d-e06866760f3e", "Member", "MEMBER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "11c1ac28-522c-41c9-9393-fbf29c1d41ed");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "341ecf36-6f35-45d6-9bb9-1578bb585a63");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "1ad2d335-9589-4813-a796-57eccf4aa091", "e2c17e55-43db-4595-b701-86e667b10317", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c84df75f-d0d1-4c23-bd19-9151c86b7393", "078b8148-4a68-400c-9387-c7b912047bc4", "Member", "MEMBER" });
        }
    }
}

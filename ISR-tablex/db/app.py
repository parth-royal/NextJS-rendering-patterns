import csv
import random
import string

# Define the number of rows in the CSV file
# num_rows = 1000000  # Adjust this number to generate the desired size of the CSV file
# num_rows = 1000  #32M
num_rows = 100000 

# Define the file name for the CSV file
file_name = 'large_data.csv'

# Define the header for the CSV file
header = ['tshirt', 'size']

# Generate random data for the CSV file
data = []
for i in range(num_rows):
    tshirt = str(i + 1)
    size = random.choice(['small', 'medium', 'large'])
    data.append([tshirt, size])

# Write the data to the CSV file
with open(file_name, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(header)
    writer.writerows(data)

print(f'CSV file generated: {file_name}')


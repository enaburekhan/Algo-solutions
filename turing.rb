# Array of products
# O(n^2) time | O(n) space
# def array_of_products(array)
#     products = [];
#   (0..(array.size - 1)).each do |i|
#     running_product = 1
#     (0..(array.size - 1)).each do |j|
#         if i != j
#           running_product *= array[j]    
#         end
#         products[i] = running_product
#     end
#   end
#    products   
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]

# O(n) time | O(n) space
# def array_of_products(array)
#   products = Array.new(array.size).fill(1)
#   left_products = Array.new(array.size).fill(1)
#   right_products = Array.new(array.size).fill(1)
  
#   left_running_product = 1
#   (0..(array.size - 1)).each do |i|
#     left_products[i] = left_running_product
#     left_running_product *= array[i]
#   end

#   right_running_product = 1
#   (0..(array.size - 1)).reverse_each do |i|
#     right_products[i] = right_running_product
#     right_running_product *= array[i]
#   end

#   (0..(array.size - 1)).each do |i|
#     products[i] = left_products[i] * right_products[i]
#   end
#   return products
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]

# O(n) time | O(n) space
# def array_of_products(array)
#   products = Array.new(array.size).fill(1) 
  
#   left_running_product = 1
#   (0..(array.size - 1)).each do |i|
#     products[i] = left_running_product
#     left_running_product *= array[i]
#   end

#   right_running_product = 1
#   (0..(array.size - 1)).reverse_each do |i|
#      products[i] *= right_running_product
#      right_running_product *= array[i]
#   end
#    products
# end

# array = [5, 1, 4, 2]

# p array_of_products(array) # [8, 40, 10, 20]



# def merged_over_lapping_intervals(array)
#   sorted_array = array.sort() 
#   current_interval = sorted_array[0]
#   merge_interval = []
#   merge_interval << current_interval 

#   sorted_array.each do |next_interval|
#     _, current_interval_end = current_interval
#     next_interval_start, next_interval_end = next_interval
#     if current_interval_end >= next_interval_start
#       current_interval[1] = [current_interval_end, next_interval_end].max
#     else
#       current_interval = next_interval
#       merge_interval << current_interval      
#     end
#   end
#    merge_interval
# end

# interval = [[1,2], [3,5], [4,7], [6,8], [9,10]]

# p merged_over_lapping_intervals(interval) #[[1,2], [3,8], [9,10]]

# def four_number_sum(array, target_sum)
#  all_pairs_sum = {}
#  quadruplets = []
#    (1...(array.size - 1)).each do |i|
#       ((i+1)..(array.size - 1)).each do |j|
#          current_sum = array[i] + array[j]
#          diff = target_sum - current_sum
#          if all_pairs_sum.include?(diff)
#             all_pairs_sum[diff].each do |pairs|
#                 p all_pairs_sum[diff]
#                 quadruplets << pairs.concat([array[i], array[j]])
#             end
#          end    
#       end
#       (0...i).each do |k|
#           current_sum = array[k] + array[i]
#           if !all_pairs_sum.include?(current_sum)
#             all_pairs_sum[current_sum] = [[array[k], array[i]]]
#           else
#               all_pairs_sum[current_sum] << [[array[k], array[i]]]
#           end
#       end
#    end
#     quadruplets     
# end

# array = [7, 6, 4, -1, 1, 2]
# target_sum = 16

# p four_number_sum(array, target_sum); #[[7, 6, 4, -1], [7, 6, 1, 2]]

def min_rewards(scores)
  rewards = Array.new(scores.size).fill(1)
  (0..(scores.size - 1)).each do |i|
    if scores[i] > scores[i-1]
        rewards[i] = rewards[i-1] + 1
    end
  end

  (0...(scores.size - 1)).reverse_each do |i|
    if scores[i] > scores[i+1]
      rewards[i] = (rewards[i], (rewards[i+1] + 1)).max()
    end
  end
   rewards 
end

scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]   
p min_rewards(scores);   # 25 [4, 3, 2, 1, 2, 3, 4, 5, 1]


